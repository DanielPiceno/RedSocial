import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
:root{
  --schoolColor: #1da1f2;
  --schoolHover: #1a91da;
  --Hover: rgba(24, 161, 242, .1);
}
*{
  margin:0;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
.App{
  display: flex;
  height: 100vh;
  max-width: 1250px;
  margin: 0 auto;
  border: 1px solid red;
}
`;

