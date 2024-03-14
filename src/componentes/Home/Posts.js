import React from 'react'
import {Post, Avatar, PostBody, PostDescription, PostFooter, Images } from './styles';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


export const Posts = () => {
  return (
    <Post>
    <div className="post_avatar">
      <Avatar src="https://randomuser.me/api/portraits/women/45.jpg" />
    </div>
    <PostBody>
      <div>
        <div>
          <h3>Campanas de Belem <span>
            <VerifiedUserIcon className="post_icon"/>
            @campanasa21</span></h3>
          <PostDescription>
            <p>lorem alex</p>
          </PostDescription>  
        </div>
        <Images src="http://blogscvc.cervantes.es/martes-neologico/wp-content/uploads/sites/2/2021/08/gif_500.gif" />
        <PostFooter>
          <ChatBubbleOutlinedIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </PostFooter>
      </div>
    </PostBody>
    </Post>

  )
}