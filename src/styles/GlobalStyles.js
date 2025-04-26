import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
  }

  body {
    font-family: ${props => props.theme.fonts.body};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-weight: 600;
    line-height: 1.3;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: ${props => props.theme.transitions.default};
  }

  button {
    font-family: ${props => props.theme.fonts.body};
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    transition: ${props => props.theme.transitions.default};
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  .container {
    max-width: ${props => props.theme.breakpoints.wide};
    margin: 0 auto;
    padding: 0 ${props => props.theme.spacing.md};
  }

  ul, ol {
    list-style: none;
  }

  section {
    width: 100%;
    position: relative;
    overflow: hidden;
  }
`;
