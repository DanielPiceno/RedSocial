import { Button } from "@mui/material";
import styled from "styled-components";

export const Widget = styled.div`
flex: 0.3;
overflow-y: scroll ;
box-sizing: border-box;
padding: 0 30px 10px 20px;
&::-webkit-scrollbar{
    display: none;   
}
-ms-overflow-style: none;
scrollbar-width: none;

@media only screen and (max-width: 1280px){
    flex: 0.3; 
}
@media only screen and (max-width: 1004px){
    display: none;
}
`

export const Header = styled.div`
background-color: white;
position: sticky;
padding-top: 10px;
top: 0;
`
export const DivIcon = styled.div`
display: flex;
align-items: center;
background-color: #eee;
padding: 10px;
border-radius: 20px;
>.ScreenSearchDesktopIcon{
color: #5b7030;
}
>input{
    border: none;
    outline: 0;
    padding-left: 10px;
    background-color: #eee;
    font-size: 16px;
}
`
export const DivContent = styled.div`

display: flex;
align-items: center;
background-color: #eee;
padding: 10px;
border-radius: 20px;
`
export const ButtonXd = styled.button`
    all: unset;
    background-color: transparent;
    width: 100%;
    color: inherit;
    cursor: pointer;
`

  