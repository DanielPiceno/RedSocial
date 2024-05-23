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

// Estilo del botón normal
export const NormalButton = styled.button`
    all: unset;
    background-color: transparent;
    width: 250px;
    color: inherit;
    cursor: pointer;
    @media (max-width: 1024px) {
        width: 60px; 
        border-radius: 50%;
    }
`;
export const SearchContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente para crear el efecto de modal */
  justify-content: center;
  display: flex;
  align-items: center;
  z-index: 2;
`;

export const SearchContainer2 = styled.div`
background-color: white; /* Color de fondo para que sea visible */
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
export const SearchContainer3 = styled.div`
background-color: transparent;
position: sticky;
`
export const SearchInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  margin: 10px;
  border: 1px solid #ccc;
  width: 200px;
  z-index: 1000;
`;

export const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: var(--schoolColor);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 1000;

  &:hover {
    background-color: var(--schoolHover);
  }
`;
export const SearchResultItem = styled.li`
  padding: 0px;
  cursor: pointer;
  list-style-type: none;
  color: black;
  width: auto;
  height: auto;
  padding: 5px 20px 5px ;
  border: 1px solid #ccc;
  margin-right: 40px;
  background-color: white;
  &:hover {
    background-color: #f0f0f0;
  }
`;


export const SearchList = styled.ul`
  list-style-type: none;
  background-color: aliceblue;
  font-size: 20px;
  font-family: 'Courier New', Courier, monospace;
  width: 300px;
  height: 300px;
  
  /* Elimina los estilos de fondo y color de texto que podrían afectar a los elementos li dentro de SearchList */
  & ${SearchResultItem} {
    background-color: transparent;
    color: black; /* Asegúrate de que el color del texto sea visible */
  }
`;