import React from 'react';
import { Postbox, Div, Avatar, Form, DivIcon } from "./styles";
import { Button } from '@mui/material';
import GifIcon from "@mui/icons-material/Gif";
import AddIcon from '@mui/icons-material/Add';


export const PostBox = () => {
    return(
        <Postbox>
            <Form>
                <Div>
                    <Avatar src="https://randomuser.me/api/portraits/women/68.jpg" alt="" />
                        <div className="columns">
                            <input text = "text" placeholder='En que estas pensando?'/>
                            <input text = "text" placeholder='Usuario'/>
                        </div>
                </Div>
                <Div>
                    <DivIcon>
                    <AddIcon></AddIcon>
                    <GifIcon></GifIcon>
                    </DivIcon>
                    <input text = "text" placeholder='Opcional Url de la imagen/gif'     />
                    <Button>Post</Button>
                </Div>                

            </Form>
        </Postbox>
    )
}