import React, { useEffect, useState } from 'react';
import { Container, Header} from "./styles";
import { PostBox } from "./PostBox";
import {Posts} from "./Posts";
import {db} from "../../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export const Home = () => {
    const [pub, setPub] = useState([]);

    const getPost = () => {
        const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
        onSnapshot(q, (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setPub(docs);
        });
    };

    useEffect(() => {
        getPost();
    }, []);

    return(
        
            <Container>
           {/*Header*/}
            
           {/*TweetBox*/}
            <PostBox   />
        {
            pub.map((pos)=>(
            <Posts  
            key = {pos.id}
            name = {pos.name} 
            username = {pos.username}
            verified = {pos.verified}
            text = {pos.text}
            avatar = {pos.avatar}
            imagePost = {pos.imagePost}
            />
            ))
        }
            </Container>
        
    )
}