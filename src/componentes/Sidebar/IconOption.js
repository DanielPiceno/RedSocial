import React from 'react';
import { SlidebarIcon } from './styles';
export const IconOption = ({text, Icon, active, primary}) => {
    return(
        <SlidebarIcon active={active} primary={primary} >
            <Icon />
            <h2>{text}</h2>
        </SlidebarIcon>
    )
}