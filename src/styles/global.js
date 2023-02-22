import { createGlobalStyle } from "styled-components";
import bgimg from '../Assets/Image/testeimg.png'

export const Global = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        height: 100vh;
        background-image: url(${bgimg});
        background-repeat: no-repeat;
        background-size: auto;
        box-sizing: border-box;
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

    :root{
        font-size: small;
        
        @media only screen and (max-width: 320px) {
            width: 80vw;
            height: 90vh;
            hr {
              margin-bottom: 0.3rem;
            }
            h4 {
              font-size: small;
            }
            
        }

        @media only screen and (min-width: 360px) {
            width: 100vw;
            height: 100vh;

            h4 {
              font-size: small;
            }
            
          }
          @media only screen and (min-width: 411px) {
            width: 100vw;
            height: 100vh;
            
          }
        
          @media only screen and (min-width: 768px) {
            width: 80vw;
            height: 80vh;
            margin: 0 auto;
            
          }
          @media only screen and (min-width: 1024px) {
            width: 70vw;
            height: 50vh;
            margin: 0 auto;
            
          }
          @media only screen and (min-width: 1280px) {
            width: 80vw;
            height: 80vh;
            margin: 0 auto;
            
          }
    }
`;

export default Global;