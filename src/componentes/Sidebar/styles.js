import styled, {css} from 'styled-components';

export const Contenedor = styled.div`
padding: 20px;
border-right: 1px solid #ddd;
flex: 0.2;
min-width: 255px;
>.page-logo{
    margin: 15px;
    width: 40px;
    height: 40px;
    fill: var(--schoolColor) !important;
}

/*>Button{
  /*  background-color: var(--schoolColor) !important;
    border: none !important;
    color:white !important;
    font-weight: 800 !important;
    text-transform: inherit !important;
    height: 46px !important;
    
    padding: 0 30px !important;
    border-radius: 9999px !important;
    margin-top: 10px !important;
    all: unset;
    O anular los estilos específicos que deseas eliminar 
    background-color: transparent;
    width: 250px !important;
    border: none;
    color: inherit;
    cursor: pointer;
}*/
@media only screen and (max-width: 1280px){
flex: 0.05;
min-width: 50px;
>Button{
    display:none;
}
}
@media only screen and (max-width: 1004px){
width: 40px;
}
@media only screen and (max-width: 500px){
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 999;
    height: 50px;
    background-color: white;
    width: 100%;
    padding: 0;
    .twitter-logo{
        display:none;
    }
}
;
`
export const SlidebarIcon = styled.div`
    display: flex;
    align-items: center;
    padding: 14px 10px;

    >h2{
        font-size: 20px;
        margin-top: 5px;
        font-weight: 700px;
    }
    >.MuiSvgIcon-root{
        width: 50px;
        height: 30px;
        margin-top: 5px;
    }
    &:hover{
        background-color: var(--Hover) !important;
        color: var(--schoolColor);
        transform: color 100ms ease-out;
    }
    ${props => props.active && css`
        color: var(--schoolColor);
        background-color: var(--Hover);
    `}
    @media only screen and (max-width: 1280px){
    border-radius: 50%;
    >h2{
        display: none;
    }
    }
    @media only screen and (max-width: 500px){
    color: #b8b8b8;
    display: ${props => props.primary ? "none" : ""};
    color: ${props => props.active ? "var(--twtterColor)" : ""};
    }
`;

export const CerrarSesionButton = styled.button`
    color: black;
    border: none;
    margin-top: 10px;
    display: flex;
    background-color: white;
    width: 250px !important;
    font-size: 16px;
    cursor: pointer;
`;
export const NormalButton = styled.button`
    all: unset;
    background-color: transparent;
    width: 250px;
    color: inherit;
    cursor: pointer;

    /* Aquí puedes agregar otros estilos específicos para el botón normal si lo deseas */
`;