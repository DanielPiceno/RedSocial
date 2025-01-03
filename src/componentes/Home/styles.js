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

export const Header = styled.header``

/*POST*/
    

export const Postbox = styled.div`
border: 1px solid #ddd;
padding: 15px 15px;
`
export const Div = styled.div`
display: flex;
width: 100%;
align-items: center;

>.columns{
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-right: 16px;
    font-size: 26px;
    
    >span{
    font-size: 26px;
    margin-left: 10px;

    @media only screen and (max-width: 500px){
    font-size: 20px;
}
@media only screen and (max-width: 320px){
    font-size: 16px;
}
    }
    >input{
        margin-left: 10px;
        margin-top: 10px;
        width: 100%;
        border: none;
        outline: 0;
        font-size: 16px;
        line-height: 25px;
        color: #0f1419;
@media only screen and (max-width: 500px){
    font-size: 14px;
}
    }
}
>input{
    margin-left: 10px;
    width: 25px;
    //largo
    flex: 1;
    border: none;
    outline: 0;
    font-size: 16px;
    line-height: 25px;
    color: #0f1419;
    @media only screen and (max-width: 500px){
    font-size: 14px;
}

}
>Button{
    background-color: var(--schoolColor);
    border: none;
    font-weight: 400;
    color:white;
    width: 80px ;
    height: 35px ; 
    margin-top: 20px ;
    border-radius: 30px ;
    text-transform: inherit ;
    transition: width 0.3s ease;
    @media only screen and (max-width: 500px){
    font-size: 14px;
    width: 60px ;
    height: 30px ; 
}
}
>Button:hover{
width: 90px;
background-color:#8B49B5;
}

`
export const DivIcon = styled.div`
    padding: 15px 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    >.MuiSvgIcon-root{
        fill: var(--schoolColor);
        margin-left: 1rem;
        border: 2px solid var(--schoolColor);
        width: 20px;
        height: 20px;
        border-radius: 5px;
        cursor: pointer;

        &:nth-child(3){
            border: 1px solid red;
        }
    }

`

export const Avatar = styled.img`
border-radius: 50%;
width: 50px;
height: 50px;
object-fit: fill;
@media only screen and (max-width: 320px){
    width: 42px;
    height: 42px;
}
`
export const Form = styled.form`
display: flex;
flex-direction: column;
`
export const File = styled.input`
max-width: 35px;
position: absolute;
z-index: 10;
opacity: 0;
padding-top: 10px;
margin-left: 20px;
padding-left: 20px;
${props => props.primary && css`
margin-left: 55px;
`};
`
/*POSTS*/
 
export const Post = styled.div`
padding: 10px 15px;
border-top: 1px solid #ddd;
margin-top: 5px;
display: flex;
align-items: flex-start;
.post_avatar{
    margin-top: 5px;
}
@media only screen and (max-width: 375px){
    font-size: 14px;
}
@media only screen and (max-width: 375px){
    font-size: 12px;
}
`

export const PostBody = styled.div`
padding-left: 10px;
width: 100%;
overflow: hidden;
>div span{
    font-weight: 600;
    font-size: 15px;
    color: #5b7083;
}

.post_icon{
    font-size: 14px !important;
    color: var(--schoolColor) !important;

}

h3{
    padding: 0;
    margin: 0;
}
`

export const PostDescription = styled.div`
margin-bottom: 10px;
>p{
    margin: 0;
    padding: 0;
    color: #0f1419;
    font-size: 16px;
    line-height: 16.6875px;
    @media only screen and (max-width: 375px){
    font-size: 14px;
}
}
`
export const Images = styled.img`
border-radius: 20px;
min-width: 100%;
width: 100%;
`
export const PostFooter = styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
color: #5b7083;
transition: all 100ms ease-in;
>.MuiSvgIcon-root:hover:nth-child(1){
    fill: #1da1f2;
    cursor: pointer;
}
>.MuiSvgIcon-root:hover:nth-child(2){
    fill: #17bf63;
    cursor: pointer;
}
>.MuiSvgIcon-root:hover:nth-child(3){
    fill: #e02452;
    cursor: pointer;
}
>.MuiSvgIcon-root:hover:nth-child(4){
    fill: #1da1f2;
    cursor: pointer;
}
`