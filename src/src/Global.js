import { createGlobalStyle } from "styled-components";
import background from './img/background.webp'
export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
body{
    background-image: url(${background});
}
`