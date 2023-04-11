import { createGlobalStyle } from "styled-components";


export const Global = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        height: auto;
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
            width: 90vw;
            height: 100vh;
            margin: 0 auto;
            
          }
          @media only screen and (min-width: 1024px) {
            width: 99vw;
            height: 100vh;
            margin: 0 auto;
            
          }
          @media only screen and (min-width: 1280px) {
            width: 99vw;
            height: 100vh;
            margin: 0 auto;
            
          }
    }

    .admOptions{
      background-color: #445ecd;
      color: #fff !important;
    }

    .carousel{
      perspective: none;
    }
    .tabs .tab a {
      background-color: #445ecd;
      color: #ffffff;
    }
    .carousel.carousel-slider{
      min-height: 400px;
      height: 750px;
    }
    .tabs .tab a:hover, .tabs .tab a.active {
      color: #ffffff;
      background-color: #44cd6f;
    }
    .tabs .tab a:focus, .tabs .tab a:focus.active {
      color: #ffffff;
      background-color: #44cd6f;
    }
    .tabs .indicator {
      position: absolute;
      bottom: 0;
      height: 2px;
      background-color: #74f8e5;
      will-change: left, right;
  }
`;

export default Global;