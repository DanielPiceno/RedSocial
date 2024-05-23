import styled, {css} from 'styled-components';

export const Container = styled.div`
flex: 0.75;
border-right: 1px solid #ddd;
overflow-y: scroll;
width: 1280px;
box-sizing: border-box;

&::-webkit-scrollbar{
    display:none;
    }
    -ms-overflow-style: none;
    scrollbar-width:none;
    @media only screen and (max-width: 1280px){
    flex: 0.65; 
}
@media only screen and (max-width: 1004px){
    flex: 0.95; 
}
@media only screen and (max-width: 500px){
    flex: 1; 
}
`
export const Informacion = styled.div`
width: 100%;
text-align: center;
background-color: var(--schoolColor);
`
export const Foto = styled.img`
margin-top: 40px;
border-radius: 50%;
width: 100px;
height: 100px;
object-fit: fill;

@media only screen and (max-width: 500px){
    width: 80px;
    height: 80px;
}
`

export const Sin = styled.div`
width: auto;
font-size: 46px;
font-family: cursive;
text-align: center;
margin-top: 30px;
color: grey;
@media only screen and (max-width: 1280px){
    font-size: 40px;
}
@media only screen and (max-width: 1004px){
    font-size: 36px;
}
@media only screen and (max-width: 500px){
    font-size: 30px;
}
`
export const Nombre = styled.div`
font-size: 36px;
font-family: cursive;
text-align: center;
color: white;
@media only screen and (max-width: 1280px){
    font-size: 30px;
}
@media only screen and (max-width: 1004px){
    font-size: 26px;
}
@media only screen and (max-width: 500px){
    font-size: 20px;
}
`
export const Cambio = styled.button`
display: flex;
background-color: transparent;
border: 0px;
:hover{
    cursor: pointer;
}
`