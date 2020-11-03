import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
    font-size: 16px;
    font-weight: 300;
    overflow: visible;
    overflow-x: hidden;
    overflow-y: scroll;
    position: relative;
  }

  `
