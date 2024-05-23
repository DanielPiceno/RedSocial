import styled, { css } from 'styled-components';

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
export const Select = styled.select`
  padding: 10px;
  margin: 20px;
  box-sizing: border-box;
  width: 650px;
    @media only screen and (max-width: 1024px){
        width: 500px;
}
@media only screen and (max-width: 500px){
    width: 400px;
}
`;
export const Contenedor2 =styled.div`
display: flex;
position: sticky;
`;
export const ContenedorMensajes = styled.div`
    align-self: ${({ isCurrentUser }) => isCurrentUser ? 'flex-end' : 'flex-start'};
    background-color: ${({ isCurrentUser }) => isCurrentUser ? '#7B68EE' : '#fff'};
    border-radius: 10px;
    color: ${({ isCurrentUser }) => isCurrentUser ? '#fff' : '#000'};
    padding: 10px;
    margin: 5px 0;
    max-width: 70%;
    word-wrap: break-word;
`;

export const Mensaje = styled.span`
    ${({ isCurrentUser }) => isCurrentUser && css`
        text-align: right;
    `}
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; /* Para separar el input y el botón */
    padding: 10px;
    box-sizing: border-box;
    width: 680px;
    @media only screen and (max-width: 1024px){
        width: 580px;
}
@media only screen and (max-width: 500px){
    width: 400px;
}
@media only screen and (max-width: 375px){
    width: 200px;
}
@media only screen and (max-width: 320px){
    width: 100px;
}

`;

export const Input = styled.input`
    flex: 1;
    padding: 10px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;