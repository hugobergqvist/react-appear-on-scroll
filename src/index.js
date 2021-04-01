import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.module.css'

// function from https://stackoverflow.com/questions/33199959/how-to-detect-a-react-component-vs-a-react-element
function isElement(element) {
  return React.isValidElement(element)
}
// function from https://stackoverflow.com/questions/33199959/how-to-detect-a-react-component-vs-a-react-element
function isDOMTypeElement(element) {
  return isElement(element) && typeof element.type === 'string'
}

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
  const appearingRef = useRef()
  const contentRef = useRef()
  const [visible, setVisible] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    if (contentRef.current) {
      setDimensions({
        width: contentRef.current.offsetWidth,
        widthWithPadding: contentRef.current.offsetWidth + containerPadding,
        height: contentRef.current.offsetHeight,
        heightWithPadding: contentRef.current.offsetHeight + containerPadding
      })
    }
  }, [contentRef])

  const renderContent = () => {
    if (isDOMTypeElement(children)) {
      return React.cloneElement(children, { ref: contentRef })
    } else {
      return React.cloneElement(children, { inputRef: contentRef })
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', isVisible)

    return () => window.removeEventListener('scroll', isVisible)
  }, [])

  const isVisible = () => {
    const rect = appearingRef.current.getBoundingClientRect()

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
      ref={appearingRef}
      className={`${styles['appearingDiv']} `}
      style={{
        ...parentStyling,

        overflow: animationType === 'scale' ? '' : 'hidden',
        opacity: fading ? (visible ? 1 : 0) : 1,
        width: parentStyling
          ? parentStyling.width
            ? parentStyling.width
            : dimensions.widthWithPadding + 'px'
          : dimensions.widthWithPadding + 'px',
        height: parentStyling
          ? parentStyling.height
            ? parentStyling.height
            : dimensions.heightWithPadding + 'px'
          : dimensions.heightWithPadding + 'px'
      }}
    >
      <div
        className={`${styles['contentWrapper']} ${styles[transitionType]} `}
        style={{
          ...wrapperStyling,
          transitionDelay: `${delay}ms`,
          width: dimensions.widthWithPadding + 'px',
          height: dimensions.heightWithPadding + 'px',
          left:
            animationType === 'fromLeft'
              ? visible
                ? '0px'
                : `-${dimensions.widthWithPadding}px`
              : 'auto',
          right:
            animationType === 'fromRight'
              ? visible
                ? '0px'
                : `-${dimensions.widthWithPadding}px`
              : 'auto',
          top:
            animationType === 'fromTop'
              ? visible
                ? '0px'
                : `-${dimensions.heightWithPadding}px`
              : 'auto',
          bottom:
            animationType === 'fromBottom'
              ? visible
                ? '0px'
                : `-${dimensions.heightWithPadding}px`
              : 'auto',
          transform:
            animationType === 'scale'
              ? visible
                ? 'scale(1)'
                : 'scale(0)'
              : 'auto'
        }}
      >
        {renderContent()}
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
