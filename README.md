# react-appear-on-scroll

> Minimalistic package providing containers which appears when scrolled into view

[![NPM](https://img.shields.io/npm/v/react-appear-on-scroll.svg)](https://www.npmjs.com/package/react-appear-on-scroll) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-appear-on-scroll
```

## Example

Examples can be seen [here](https://hugobergqvist.github.io/react-appear-on-scroll/).

## Requirements

If you wrap a React Class Component or Functional Component with the `<AppearingContainer/>` you have to pass an `inputRef` prop to it's child (See example below)

## Usage

```jsx
import React, { Component } from 'react'
import 'react-appear-on-scroll/dist/index.css'

import {
  AppearingContainer,
  AppearSequentialContainer
} from 'react-appear-on-scroll'
import 'react-appear-on-scroll/dist/index.css'

// Wrapping a regular element
class Example extends Component {
  render() {
    return (
      <AppearingContainer
        animationType='fromLeft'
        transitionType='bouncy'
        fading
        stayVisible
      >
        <div style={{ width: '200px', height: '150px' }}>
          <p>This container will appear once it's entirely in the viewport</p>
        </div>
      </AppearingContainer>
    )
  }
}

//Wrapping a React Functional Component
const TestComponent = ({ inputRef }) => {
  return (
    <div ref={inputRef}>
      <p>Hello!</p>
    </div>
  )
}

class Example extends Component {
  render() {
    return (
      <AppearingContainer
        animationType='fromLeft'
        transitionType='bouncy'
        fading
        stayVisible
      >
        <TestComponent />
      </AppearingContainer>
    )
  }
}

// Using the AppearSequentialContainer
class Example2 extends Component {
  render() {
    return (
      <AppearSequentialContainer>
        <AppearingContainer
          animationType='scale'
          transitionType='bouncy'
          fading
          stayVisible
        >
          <div style={{ width: '200px', height: '150px' }}>
            <p>This container will appear first</p>
          </div>
        </AppearingContainer>
        <AppearingContainer
          animationType='scale'
          transitionType='bouncy'
          fading
          stayVisible
        >
          <div style={{ width: '200px', height: '150px' }}>
            <p>This container will appear with a 200ms delay</p>
          </div>
        </AppearingContainer>
        <AppearingContainer
          animationType='scale'
          transitionType='bouncy'
          fading
          stayVisible
        >
          <div style={{ width: '200px', height: '150px' }}>
            <p>This container will appear with a 400ms delay</p>
          </div>
        </AppearingContainer>
      </AppearSequentialContainer>
    )
  }
}
```

## Props

### AppearingContainer

| Prop                      | Type:  |  Default   |                                                           Value                                                            |
| ------------------------- | :----: | :--------: | :------------------------------------------------------------------------------------------------------------------------: |
| parentStyling             | object |    none    |                                  Custom styling which is applied to the parent container                                   |
| wrapperStyling            | object |    none    |                                   Custom styling which is applied to the content wrapper                                   |
| delay                     | number |    none    |                                Adds transition-delay, utilized by AppearSequentialContainer                                |
| transitionType            | string |   'ease'   |                                            One of 'ease', 'smooth' or 'bouncy'                                             |
| fading                    |  bool  |   false    |                                     if true: transitions opacity from 0 to 1 over 0.5s                                     |
| stayVisible               |  bool  |   false    |                                     if true: transitions once and is then left visible                                     |
| requireFullHeightToRender |  bool  |   false    | if true: does not render until entire element is visible in the viewport, else it renders when half the element is visible |
| animationType             | string | 'fromLeft' |                             One of 'fromLeft', 'fromRight', 'fromTop', 'fromBottom' or 'scale'                             |
| containerPadding          | number |     15     |                           Adds padding to the parent container, necessary if box-shadow is used                            |

### AppearSequentialContainer

| Prop           |             Type             | Default |                          Value                          |
| -------------- | :--------------------------: | :-----: | :-----------------------------------------------------: |
| children       | element or array of elements |  none   |            One or more 'AppearingContainer'             |
| style          |            object            |  none   | Custom styling which is applied to the parent container |
| delayIncrement |            number            |   100   | Number of milliseconds of delay between each transition |

## License

MIT © [hugobergqvist](https://github.com/hugobergqvist)
