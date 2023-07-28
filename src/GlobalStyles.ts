import { createGlobalStyle } from "styled-components";



const GlobalStyles=createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
};

body{  
    
    background-color: #d5fefd;
    background-image: linear-gradient(315deg, #d5fefd 0%, #fffcff 74%);
}
`

export default GlobalStyles