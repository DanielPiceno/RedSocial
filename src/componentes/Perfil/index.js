import React, { useState, useEffect } from 'react';
import { Container, Informacion, Foto, Sin, Nombre, Cambio} from './styles';
import { db } from "../../firebase";
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { Posts } from '../Home/Posts';
import { getDocs } from 'firebase/firestore';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Fondo from '../../images/Fondo2.jpg';

export const Perfil = ({ username }) => {
    const [imagenPerfil, setImagenPerfil] = useState('');
    const [nombreUsuario, setNombreUsuario] = useState('');
    const [pub, setPub] = useState([]);
    const [imagenFondo, setImagenFondo] = useState({Fondo});

    const handleCambioFondo = () => {
        // Aquí puedes implementar la lógica para cambiar la imagen de fondo
        // Por ejemplo, puedes abrir un cuadro de diálogo para que el usuario seleccione una imagen
        // o puedes tener una lista predefinida de imágenes y cambiar entre ellas
        // Por ahora, simplemente establecemos una imagen de fondo predeterminada diferente
        setImagenFondo('nueva_url_de_imagen_de_fondo');
    };

    useEffect(() => {
        // Limpia la información cada vez que se refresca el componente
        setImagenPerfil('');
        setNombreUsuario('');
        setPub([]);

        const fetchUserProfile = async () => {
            try {
                const usersCollectionRef = collection(db, 'users');
                const q = query(usersCollectionRef, where('displayName', '==', username));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    const userData = doc.data();
                    setImagenPerfil(userData.photoURL);
                    setNombreUsuario(userData.displayName);
                });

                const userPostsRef = collection(db, "posts");
                const postQuery = query(userPostsRef, where("username", "==", username), orderBy("timestamp", "desc"));
                
                const unsubscribePosts = onSnapshot(postQuery, (querySnapshot) => {
                    const docs = [];
                    querySnapshot.forEach((doc) => {
                        docs.push({ ...doc.data(), id: doc.id });
                    });
                    setPub(docs);
                });

                return () => unsubscribePosts();
            } catch (error) {
                console.error('Error al obtener el perfil del usuario:', error);
            }
        };

        fetchUserProfile();
    }, [username]);

    return (
        <Container>
            <Informacion style={{ backgroundImage: `url(${Fondo})` }}>
                <Cambio onClick={handleCambioFondo}><MoreHorizIcon/></Cambio>
                <Foto src={imagenPerfil} alt="Foto de perfil" />
                <Nombre>{nombreUsuario}</Nombre>
            </Informacion>
            {pub.length === 0 ? (
                <Sin>Sin publicaciones</Sin>
            ) : (
                pub.map((pos) => (
                    <Posts  
                        key={pos.id}
                        name={pos.name} 
                        username={pos.username}
                        verified={pos.verified}
                        text={pos.text}
                        avatar={pos.avatar}
                        imagePost={pos.imagePost}
                    />
                ))
            )}
        </Container>
    );
};