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
`;
export const WelcomeText = styled.p`
    font-size: 60px;
    font-weight:bold;
    text-align: center;
    margin-bottom: 20px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    /* Otros estilos que desees aplicar al texto de bienvenida */
`;