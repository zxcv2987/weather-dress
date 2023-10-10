import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html, body {
    height: auto;
    width: 100%;
    -webkit-font-smoothing: antialiased;
  }
  button {
    cursor: pointer;
    background-color: inherit;
  }
`;
export default GlobalStyle;
