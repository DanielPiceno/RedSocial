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
>Button{
    background-color: var(--schoolColor) !important;
    border: none !important;
    color:white !important;
    font-weight: 800 !important;
    text-transform: inherit !important;
    height: 46px !important;
    width: 250px !important;
    padding: 0 30px !important;
    border-radius: 9999px !important;
    margin-top: 10px !important;
}
`;

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
`;