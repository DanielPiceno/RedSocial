import React from 'react';
import { Postbox, Div, Avatar, Form } from "./styles";

export const PostBox = () => {
    return(
        <Postbox>
            <Form>
                <Div>
                    <Avatar src="https://randomuser.me/api/portraits/women/68.jpg" alt="" />
                        <div className="colums">
                            <input text = "text" placeholder='En que estas pensando?'/>
                            <input text = "text" placeholder='Usuario'/>
                        </div>
                        
                </Div>
            </Form>
        </Postbox>
    )
}