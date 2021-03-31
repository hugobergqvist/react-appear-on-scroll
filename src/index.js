import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

export const AppearingContainer = ({
  children,
  parentStyling,
  wrapperStyling,
  transitionType = 'ease',
  animationType = 'fromLeft',
  fading = false,
  stayVisible = false,
  delay = 0,
  containerPadding = 15
}) => {
  const appearingDiv = useRef()

  const [visible, setVisible] = useState(false)

  let contentWidth = parseInt(children.props.style.width.replace('px', ''))
  let contentHeight = parseInt(children.props.style.height.replace('px', ''))

  let wrapperWidth = contentWidth + containerPadding
  let wrapperHeight = contentHeight + containerPadding

  useEffect(() => {
    window.addEventListener('scroll', isVisible)

    return () => window.removeEventListener('scroll', isVisible)
  }, [])

  const isVisible = () => {
    const rect = appearingDiv.current.getBoundingClientRect()

    if (
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
    ) {
      setVisible(true)
    } else if (!stayVisible) {
      setVisible(false)
    }
  }

  return (
    <div
      ref={appearingDiv}
      className={`${styles.appearingDiv} `}
      style={{
        ...parentStyling,

        overflow: animationType === 'scale' ? '' : 'hidden',
        opacity: fading ? (visible ? 1 : 0) : 1,
        width: parentStyling
          ? parentStyling.width
            ? parentStyling.width
            : wrapperWidth + 'px'
          : wrapperWidth + 'px',
        height: parentStyling
          ? parentStyling.height
            ? parentStyling.height
            : wrapperHeight + 'px'
          : wrapperHeight + 'px'
      }}
    >
      <div
        className={`${styles['contentWrapper']} ${styles[transitionType]} `}
        style={{
          ...wrapperStyling,

          transitionDelay: `${delay}ms`,

          left:
            animationType === 'fromLeft'
              ? visible
                ? '0px'
                : `-${contentWidth + containerPadding}px`
              : 'auto',
          right:
            animationType === 'fromRight'
              ? visible
                ? '0px'
                : `-${contentWidth + containerPadding}px`
              : 'auto',
          top:
            animationType === 'fromTop'
              ? visible
                ? '0px'
                : `-${contentHeight + containerPadding}px`
              : 'auto',
          bottom:
            animationType === 'fromBottom'
              ? visible
                ? '0px'
                : `-${contentHeight + containerPadding}px`
              : 'auto',
          transform:
            animationType === 'scale'
              ? visible
                ? 'scale(1)'
                : 'scale(0)'
              : 'auto'
        }}
      >
        {children}
      </div>
    </div>
  )
}

export const AppearSequentialContainer = ({
  children,
  style,
  delayIncrement = 100
}) => {
  const [content, setContent] = useState(null)

  useEffect(() => {
    let tempContent = []
    let delay = 0

    if (Array.isArray(children)) {
      children.forEach((child, index) => {
        tempContent.push(
          React.cloneElement(child, {
            delay: delay,
            key: `appearingContainer-${index}`
          })
        )
        delay += delayIncrement
      })
    } else {
      tempContent.push(
        React.cloneElement(children, {
          delay: delay,
          key: `appearingContainer`
        })
      )
    }

    setContent(tempContent)
  }, [children])

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        ...style
      }}
    >
      {content}
    </div>
  )
}

AppearingContainer.propTypes = {
  children: PropTypes.object.isRequired,
  parentStyling: PropTypes.object,
  wrapperStyling: PropTypes.object,
  delay: PropTypes.number,
  transitionType: PropTypes.oneOf(['ease', 'bouncy', 'smooth']),
  fading: PropTypes.bool,
  stayVisible: PropTypes.bool,
  animationType: PropTypes.oneOf([
    'fromLeft',
    'fromRight',
    'fromTop',
    'fromBottom',
    'scale'
  ]),
  containerPadding: PropTypes.number
}

AppearSequentialContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  style: PropTypes.object,
  delayIncrement: PropTypes.number
}
