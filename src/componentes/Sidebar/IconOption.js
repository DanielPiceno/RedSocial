import React from 'react';
import { SlidebarIcon } from './styles';
export const IconOption = ({text, Icon, active}) => {
    return(
        <SlidebarIcon active={active}>
            <Icon />
            <h2>{text}</h2>
        </SlidebarIcon>
    )
}