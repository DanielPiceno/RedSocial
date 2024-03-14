import React from 'react';
import { Container, Header} from "./styles";
import { PostBox } from "./PostBox";
import {Posts} from "./Posts";

export const Home = () => {
    return(
        
            <Container>
           {/*Header*/}
            
           {/*TweetBox*/}
            <PostBox   />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />
            <Posts />

            </Container>
        
    )
}