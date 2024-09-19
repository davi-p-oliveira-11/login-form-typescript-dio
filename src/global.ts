import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

   * {
      margin: 0;
      padding: 0;
      font-family: 'Montserrat', sans-serif;
      box-sizing: border-box;
   }

   body {
      font-family: 'Montserrat', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #dae9ff
   }

   input, button, textarea, h1, h2, h3, h4, h5, h6 {
      font-family: 'Montserrat', sans-serif;
   }
`;
