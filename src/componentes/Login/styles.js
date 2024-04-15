import styled, {css} from 'styled-components';

export const LoginContainer = styled.div`
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
  background-color: white;
  
  
`;


export const Button = styled.button`
 background-color: #6014AD;
    border: none !important;
    color:white !important;
    font-weight: 800 !important;
    text-transform: inherit !important;
    height: 46px !important;
    width: 500px;
    padding: 0 30px !important;
    border-radius: 9999px !important;
    margin-top: 10px !important;
    ${props => props.center && css`
        margin: 0 auto; /* Centra horizontalmente */
        display: block; /* Hace que el botón ocupe todo el ancho disponible */
    `}
  &:hover {
    background-color: rgba(96, 20, 173, 0.5);
  }
  
@media only screen and (max-width: 1004px){
  width: 300px;
    height: 36px; 
    
}
@media only screen and (max-width: 500px){
  width: 250px;
    height: 30px; 
    
}
`;
export const WelcomeText = styled.p`
    font-size: 60px;
    font-weight:bold;
    text-align: center;
    margin-bottom: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    
@media only screen and (max-width: 1004px){
  font-size: 40px;
    
}
@media only screen and (max-width: 500px){
  font-size: 30px;
}
`;

export const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media only screen and (max-width: 1004px){

  }
  @media only screen and (max-width: 500px){
  
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px; /* Ajusta la altura según sea necesario */
`;