import React, { useState } from 'react';
import { CerrarSesionButton, Contenedor, NormalButton } from './styles';
import SchoolIcon from '@mui/icons-material/School';
import { IconOption } from './IconOption.js';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import ArticleIcon from '@mui/icons-material/Article';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LogoutIcon from '@mui/icons-material/Logout';
import { getAuth, signOut } from 'firebase/auth'; // Importa signOut de firebase/auth

export const Sidebar = () => {
    const [mostrarCerrarSesion, setMostrarCerrarSesion] = useState(false);
    const auth = getAuth(); // Obtiene la instancia de autenticación

    const desplegar = () => {
        setMostrarCerrarSesion(prevState => !prevState);
    }

    const cerrarSesion = () => {
        signOut(auth) // Cierra la sesión utilizando la instancia de autenticación
            .then(() => {
                // Cierre de sesión exitoso
                console.log('Sesión cerrada exitosamente');
            })
            .catch((error) => {
                // Manejo de errores al cerrar sesión
                console.error('Error al cerrar sesión:', error);
            });
    }

    return (
        <Contenedor>
            <SchoolIcon className='page-logo' />
            <IconOption active Icon={HomeIcon} text="Inicio" />
            <IconOption Icon={SearchIcon} text="Buscar" />
            <IconOption Icon={NotificationsIcon} text="Notificaciones" />
            <IconOption Icon={MessageIcon} text="Mensajes" />
            <IconOption primary Icon={ArticleIcon} text="Foros" />
            <NormalButton onClick={desplegar}><IconOption primary Icon={PersonIcon} text="Perfil"/></NormalButton>
            {mostrarCerrarSesion && <CerrarSesionButton onClick={cerrarSesion}><IconOption Icon={LogoutIcon} text="Cerrar sesión" /></CerrarSesionButton>}
            <IconOption primary Icon={MoreHorizIcon} text="Más opciones" />
        </Contenedor>
    );
};