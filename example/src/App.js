import React from 'react'

import {
  AppearingContainer,
  AppearSequentialContainer
} from 'react-appear-on-scroll'
import 'react-appear-on-scroll/dist/index.css'

const contentStyling = {
  width: '250px',
  height: '200px',
  borderRadius: '4px',
  backgroundColor: 'lightGrey',
  flexDirection: 'column',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxShadow:
    '0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12)'
}

const spanStyling = {
  display: 'flex',
  justifyContent: 'space-evenly',
  width: '100%',
  marginTop: '10px',
  flexWrap: 'wrap'
}

const textStyling = {
  margin: '0px',
  marginBottom: '4px'
}

const App = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Verdana, sans-serif'
      }}
    >
      <div
        style={{
          height: '100vh',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}
      >
        <p style={{ fontSize: '14pt', marginBottom: '10px' }}>
          Scroll down to make the containers appear!
        </p>
        <div className='bounce'>
          <div className='arrow down' />
        </div>
      </div>
      <span style={spanStyling}>
        <AppearingContainer
          animationType='fromLeft'
          transitionType='ease'
          fading
        >
          <div style={{ ...contentStyling, backgroundColor: '#4cc9f0' }}>
            <p style={textStyling}>animationType: fromLeft</p>
            <p style={textStyling}>transitionType: ease</p>
            <p style={textStyling}>fading: true</p>
          </div>
        </AppearingContainer>
        <AppearingContainer
          animationType='fromLeft'
          transitionType='smooth'
          stayVisible
        >
          <div style={{ ...contentStyling, backgroundColor: '#4cc9f0' }}>
            <p style={textStyling}>animationType: fromLeft</p>
            <p style={textStyling}>transitionType: smooth</p>
            <p style={textStyling}>fading: false</p>
            <p style={textStyling}>stayVisible: true</p>
          </div>
        </AppearingContainer>
        <AppearingContainer
          animationType='fromLeft'
          transitionType='bouncy'
          fading
        >
          <div style={{ ...contentStyling, backgroundColor: '#4cc9f0' }}>
            <p style={textStyling}>animationType: fromLeft</p>
            <p style={textStyling}>transitionType: bouncy</p>
            <p style={textStyling}>fading: true</p>
          </div>
        </AppearingContainer>
      </span>
      <span style={spanStyling}>
        <AppearingContainer
          animationType='fromTop'
          transitionType='smooth'
          fading
        >
          <div style={{ ...contentStyling, backgroundColor: '#4895ef' }}>
            <p style={textStyling}>animationType: fromTop</p>
            <p style={textStyling}>transitionType: smooth</p>
            <p style={textStyling}>fading: true</p>
          </div>
        </AppearingContainer>
        <AppearingContainer
          animationType='fromTop'
          transitionType='ease'
          fading
        >
          <div style={{ ...contentStyling, backgroundColor: '#4895ef' }}>
            <p style={textStyling}>animationType: fromTop</p>
            <p style={textStyling}>transitionType: ease</p>
            <p style={textStyling}>fading: true</p>
          </div>
        </AppearingContainer>
        <AppearingContainer
          animationType='fromTop'
          transitionType='bouncy'
          fading
        >
          <div style={{ ...contentStyling, backgroundColor: '#4895ef' }}>
            <p style={textStyling}>animationType: fromTop</p>
            <p style={textStyling}>transitionType: bouncy</p>
            <p style={textStyling}>fading: true</p>
          </div>
        </AppearingContainer>
      </span>
      <span style={spanStyling}>
        <AppearingContainer
          animationType='scale'
          transitionType='smooth'
          fading
        >
          <div
            style={{
              ...contentStyling,
              backgroundColor: '#4361ee',
              color: 'white'
            }}
          >
            <p style={textStyling}>animationType: scale</p>
            <p style={textStyling}>transitionType: smooth</p>
            <p style={textStyling}>fading: true</p>
          </div>
        </AppearingContainer>
        <AppearingContainer animationType='scale' transitionType='ease' fading>
          <div
            style={{
              ...contentStyling,
              backgroundColor: '#4361ee',
              color: 'white'
            }}
          >
            <p style={textStyling}>animationType: scale</p>
            <p style={textStyling}>transitionType: ease</p>
            <p style={textStyling}>fading: true</p>
          </div>
        </AppearingContainer>
        <AppearingContainer
          animationType='scale'
          transitionType='bouncy'
          fading
        >
          <div
            style={{
              ...contentStyling,
              backgroundColor: '#4361ee',
              color: 'white'
            }}
          >
            <p style={textStyling}>animationType: scale</p>
            <p style={textStyling}>transitionType: bouncy</p>
            <p style={textStyling}>fading: true</p>
          </div>
        </AppearingContainer>
      </span>
      <p style={{ maxWidth: '800px' }}>
        This is a 'AppearSequentialContainer' wrapping three
        'AppearingContainer' which adds a longer and longer transition delay to
        each item, making them appear in sequence
      </p>
      <AppearSequentialContainer
        style={{
          backgroundColor: '#480ca8',
          padding: '10px',
          borderRadius: '4px'
        }}
      >
        <AppearingContainer
          animationType='scale'
          transitionType='bouncy'
          fading
        >
          <div
            style={{
              ...contentStyling,
              backgroundColor: '#b5179e',
              color: 'white'
            }}
          >
            <p style={textStyling}>animationType: scale</p>
            <p style={textStyling}>transitionType: bouncy</p>
            <p style={textStyling}>fading: true</p>
          </div>
        </AppearingContainer>
        <AppearingContainer
          animationType='scale'
          transitionType='bouncy'
          fading
        >
          <div
            style={{
              ...contentStyling,
              backgroundColor: '#b5179e',
              color: 'white'
            }}
          >
            <p style={textStyling}>animationType: scale</p>
            <p style={textStyling}>transitionType: bouncy</p>
            <p style={textStyling}>fading: true</p>
          </div>
        </AppearingContainer>
        <AppearingContainer
          animationType='scale'
          transitionType='bouncy'
          fading
        >
          <div
            style={{
              ...contentStyling,
              backgroundColor: '#b5179e',
              color: 'white'
            }}
          >
            <p style={textStyling}>animationType: scale</p>
            <p style={textStyling}>transitionType: bouncy</p>
            <p style={textStyling}>fading: true</p>
          </div>
        </AppearingContainer>
      </AppearSequentialContainer>
      <div
        style={{
          height: '10vh',
          width: '100%',
          marginTop: '10px'
        }}
      />
    </div>
  )
}

export default App
