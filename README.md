# react-appear-on-scroll

> Minimalistic package providing containers which appears when scrolled into view

[![NPM](https://img.shields.io/npm/v/react-appear-on-scroll.svg)](https://www.npmjs.com/package/react-appear-on-scroll) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-appear-on-scroll
```

## Requirements

`<AppearingContainer/>` requires a single child element which has both height and width set.

## Usage

```jsx
import React, { Component } from 'react'

import {
  AppearingContainer,
  AppearSequentialContainer
} from 'react-appear-on-scroll'
import 'react-appear-on-scroll/dist/index.css'

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

| Prop             |     Type     |                                 Value                                 |
| ---------------- | :----------: | :-------------------------------------------------------------------: |
| parentStyling    | type: object |        Custom styling which is applied to the parent container        |
| wrapperStyling   | type: object |        Custom styling which is applied to the content wrapper         |
| delay            | type: number |     Adds transition-delay, utilized by AppearSequentialContainer      |
| transitionType   | type: string |                  One of 'ease', 'smooth' or 'bouncy'                  |
| fading           |  type: bool  |           if true transitions opacity from 0 to 1 over 0.5s           |
| stayVisible      |  type: bool  |           if true transitions once and is then left visible           |
| animationType    | type: string |  One of 'fromLeft', 'fromRight', 'fromTop', 'fromBottom' or 'scale'   |
| containerPadding | type: number | Adds padding to the parent container, necessary if box-shadow is used |

### AppearSequentialContainer

| Prop     |                Type                |                          Value                          |
| -------- | :--------------------------------: | :-----------------------------------------------------: |
| children | type: element or array of elements |            One or more <AppearingContainer/>            |
| style    |            type: object            | Custom styling which is applied to the parent container |

## License

MIT © [hugobergqvist](https://github.com/hugobergqvist)
