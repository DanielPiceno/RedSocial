import React, { useState, useEffect } from 'react';
import { Contenedor, NormalButton, SearchContainer, SearchInput, SearchButton, SearchContainer3, SearchContainer2, SearchResultItem } from './styles'; // Asegúrate de importar los estilos necesarios
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
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import logo from '../../images/logoCorto.jpeg';

export const Sidebar = ({ verPerfil, verHome, verMensajes}) => {
    const [mostrarBuscador, setMostrarBuscador] = useState(false); // Estado para mostrar/ocultar el buscador
    const [busqueda, setBusqueda] = useState(''); // Estado para almacenar la búsqueda
    const [perfilExistente, setPerfilExistente] = useState(true); // Estado para indicar si el perfil existe o no
    const [perfilesEncontrados, setPerfilesEncontrados] = useState([]); // Estado para almacenar los perfiles encontrados
    const auth = getAuth(); // Obtiene la instancia de autenticación

    useEffect(() => {
        const buscarPerfiles = async () => {
            if (busqueda.trim() !== '') {
                const usersCollectionRef = collection(db, 'users');
                const q = query(usersCollectionRef, where('displayName', '>=', busqueda.trim()), where('displayName', '<=', busqueda.trim() + '\uf8ff'));
                const querySnapshot = await getDocs(q);
                const perfiles = [];
                querySnapshot.forEach((doc) => {
                    perfiles.push(doc.data());
                });
                setPerfilesEncontrados(perfiles);
            } else {
                setPerfilesEncontrados([]);
            }
        };

        buscarPerfiles();
    }, [busqueda]);

    const cerrarSesion = () => {
        signOut(auth)
            .then(() => {
                console.log('Sesión cerrada exitosamente');
            })
            .catch((error) => {
                console.error('Error al cerrar sesión:', error);
            });
    }

    const togglePerfil = () => {
        setMostrarBuscador(false); // Oculta el buscador al mostrar "Mi perfil"
    }

    const handleBuscar = () => {
        if (busqueda.trim() !== '') {
            // Convertir el término de búsqueda a minúsculas
            const busquedaMinusculas = busqueda.trim().toUpperCase();
            // Verificar si el perfil ingresado existe en la base de datos
            const usersCollectionRef = collection(db, 'users');
            const q = query(usersCollectionRef, where('displayNameLowerCase', '==', busquedaMinusculas));
            getDocs(q).then((querySnapshot) => {
                if (querySnapshot.empty) {
                    // Si no se encontró ningún usuario con el nombre de perfil ingresado, establece el estado de perfilExistente en falso
                    setPerfilExistente(false);
                    alert('Perfil no existente');
                    setMostrarBuscador(false);
                } else {
                    // Si se encontró al menos un usuario con el nombre de perfil ingresado, establece el estado de perfilExistente en verdadero
                    setPerfilExistente(true);
                    // Realiza la búsqueda solo si hay un nombre de perfil ingresado y se encontró un usuario con ese nombre
                    verPerfil(busqueda.trim());
                    setBusqueda(''); // Limpia el campo de búsqueda después de la búsqueda
                    setMostrarBuscador(false); // Oculta el buscador después de la búsqueda
                }
            }).catch((error) => {
                console.error('Error al buscar el perfil:', error);
            });
        }
    }
    const cerrar = () =>{
        setMostrarBuscador(false);
    }

    return (
        <Contenedor>
            <img src={logo} alt='logoUnichat'></img>
            <NormalButton onClick={verHome}><IconOption Icon={HomeIcon} text="Inicio" /></NormalButton>
            <NormalButton onClick={() => setMostrarBuscador(true)}><IconOption Icon={SearchIcon} text="Buscar" /></NormalButton> {/* Botón para mostrar el buscador */}
            <IconOption primary Icon={NotificationsIcon} text="Notificaciones" />
            <NormalButton onClick={verMensajes}><IconOption Icon={MessageIcon} text="Mensajes" /></NormalButton>
            <IconOption primary Icon={ArticleIcon} text="Foros" />
            {<NormalButton onClick={() => verPerfil(auth.currentUser.displayName)}><IconOption Icon={PersonIcon} text="Mi perfil" /></NormalButton>}
            {<NormalButton onClick={cerrarSesion}><IconOption Icon={LogoutIcon} text="Cerrar sesión" /></NormalButton>}
            <IconOption primary Icon={MoreHorizIcon} text="Más opciones" />
            {/* Ventana emergente del buscador */}
            
            {mostrarBuscador && (
                
                <SearchContainer> 
                    <SearchContainer3>
                    <SearchContainer2>
                    <SearchInput 
                        type="text"
                        value={busqueda}
                        onChange={(e) => setBusqueda(e.target.value)}
                        placeholder="Buscar perfil..."
                    />
                    <SearchButton onClick={cerrar}>Salir</SearchButton>
                    {/* Lista de perfiles encontrados */}
                    </SearchContainer2>
                    <SearchContainer2>
                   
                    {perfilesEncontrados.length > 0 && (
                        
                        <ul>
                            {perfilesEncontrados.map((perfil, index) => (
                                <SearchResultItem 
                                key={index} 
                                onClick={() => {
                                  verPerfil(perfil.displayName);
                                  setMostrarBuscador(false); 
                                }}
                              >
                                {perfil.displayName}
                              </SearchResultItem>
                            ))}
                        </ul>
                    
                        
                    )}
                    </SearchContainer2>
                    </SearchContainer3>
                    </SearchContainer>
            )}
        </Contenedor>
    );
};
