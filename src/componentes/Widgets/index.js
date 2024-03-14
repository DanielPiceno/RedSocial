import React from 'react'
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop';
import {Widget , Header, DivIcon, DivContent} from "./styles";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
export const Widgets = () => {
    return(
        <Widget>
            <Header>
                <DivIcon>
                    <ScreenSearchDesktopIcon class="searchIcon"/>
                    <input placeholder='Buscar en chatuni'/>
                </DivIcon>
            </Header>
            <DivContent>
                <h2>Novedades</h2>
                <TwitterTweetEmbed tweetId={'1767614921263435890'}/>
                <TwitterTimelineEmbed sourceType="profile" screenName="sarahcobss" options={{height: 400}}/>
                <TwitterShareButton url={'https://facebook.com/saurabhnemade'} options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}/>
            </DivContent>
        </Widget>
    )
}