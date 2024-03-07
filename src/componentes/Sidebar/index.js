import React from 'react'
import {Contenedor} from './styles';
import SchoolIcon from '@mui/icons-material/School';
import {IconOption} from './IconOption.js';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';

export const Sidebar = () => {
    return(
       <Contenedor>
        <SchoolIcon className='page-logo'/>
            <IconOption active Icon={HomeIcon} text="Inicio" />
            <IconOption Icon={SearchIcon} text="Buscar"/>
            <IconOption Icon={NotificationsIcon} text="Notificaciones"/>
            <IconOption Icon={MessageIcon} text="Mensajes"/>
            <IconOption Icon={ArticleIcon} text="Foros"/>
            <IconOption Icon={PersonIcon} text="Perfil"/>
            <IconOption Icon={MoreHorizIcon} text="Mas opciones"/>
            <Button variant="outlined" fullWidth>Post</Button>
       </Contenedor>
    )
}