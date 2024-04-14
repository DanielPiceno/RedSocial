import React from 'react'
import {Post, Avatar, PostBody, PostDescription, PostFooter, Images } from './styles';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


export const Posts = ({
            name,
            username,
            text,
            avatar,
            imagePost
}
) => {
  return (
    <Post>
    <div className="post_avatar">
      <Avatar src={avatar}/>
    </div>
    <PostBody>
      <div>
        <div>
          <h3>{name}<span>
            <VerifiedUserIcon className="post_icon"/>
            @{username}</span></h3>
          <PostDescription>
            <p>{text}</p>
          </PostDescription>  
        </div>
        <Images src={imagePost} />
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