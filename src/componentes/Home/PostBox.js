import React, {useState, useEffect} from 'react';
import { Postbox, Div, Avatar, Form, DivIcon, File} from "./styles";
import { Button } from '@mui/material';
import GifIcon from "@mui/icons-material/Gif";
import AddIcon from '@mui/icons-material/Add';
import {db, storage} from "../../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import User from '../../images/user.png';
import { collection, doc, setDoc } from "firebase/firestore"; 
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const PostBox = () => {
    const [postMsg, setPostMsg] = useState('');
    const [usuario, setUsuario] = useState('');
    const [images, setImages] = useState('');
    const [pubImg, setPubImg] = useState('');

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsuario(user.displayName); // Obtener el nombre de usuario del usuario autenticado
                setImages(user.photoURL); // Obtener la URL de la foto de perfil del usuario autenticado
            } else {
                // No hay usuario iniciado sesión
            }
        });

        return () => unsubscribe();
    }, []);

    const sendPost = async (e) => {
        e.preventDefault();
        if (usuario.length < 1) {
            alert("Debes ingresar un nombre de usuario");
            return;
        }
        if (images.length < 1) {
            alert("Debes ingresar una foto de usuario");
            return;
        }
        if (postMsg.length < 5) {
            alert("Tu post debe ser mayor a 5 caracteres");
            return;
        }
        if (postMsg.length > 300) {
            alert("Tu post debe ser menor a 300 caracteres");
            return;
        }
    
        try {
            const postsCollectionRef = collection(db, 'posts'); // Obtiene una referencia a la colección 'posts'
            await setDoc(doc(postsCollectionRef), {
                name: usuario,
                username: usuario,
                verified: true,
                text: postMsg,
                timestamp: Date.now(),
                avatar: images,
                imagePost: pubImg
            });
    
            console.log("Post creado con éxito");
            setPubImg('');
            setPostMsg('');
            setUsuario('');
        } catch (error) {
            console.error("Error al crear el post:", error);
            // Manejar el error aquí
        }
    }

    const handleSubir = e =>{
        const file = e.target.files[0];
        const storageRef = ref(storage, `/avatar/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Progreso de la carga:", progress);
            },
            error => {
                console.log("Error durante la carga:", error);
            }, () =>{
                console.log("Carga completada con éxito");
                getDownloadURL(storageRef).then(url => {
                    console.log("URL de descarga:", url);
                    setImages(url);
                }).catch(error => {
                    console.log("Error al obtener la URL de descarga:", error);
                });
            }
            
        )
    }

    const handlePost = e => {
        const file = e.target.files[0];
        const storageRef = ref(storage, `/post/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on(
            "state_changed",
            snapshot => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Progreso de la carga:", progress);
            },
            error => {
                console.log("Error durante la carga:", error);
            }, () => {
                console.log("Carga completada con éxito");
                getDownloadURL(storageRef).then(url => {
                    console.log("URL de descarga:", url);
                    setPubImg(url);
                    alert("Imagen cargada correctamente"); // Mostrar mensaje de alerta
                }).catch(error => {
                    console.log("Error al obtener la URL de descarga:", error);
                });
            }
        )
    }

    return (
        <Postbox>
            <Form>
                <Div>
                    {images ? <Avatar src={images} alt="" /> : <Avatar src={User} alt="" />}
                    <File type="file" onChange={handleSubir} disabled />
                    <div className="columns">
                    <span>{usuario}</span> 
                        <input
                            type="text"
                            placeholder="En que estas pensando?"
                            value={postMsg}
                            onChange={(e) => setPostMsg(e.target.value)}
                        />
                        
                    </div>
                </Div>
                <Div>
                    <DivIcon>
                        <AddIcon />
                        <File type="file" primary onChange={handlePost} />
                        <GifIcon />
                    </DivIcon>
                    <File type="file" onChange={handlePost} />
                    <input
                        type="text"
                        placeholder="Opcional Url de la imagen/gif"
                        value={pubImg}
                        onChange={(e) => setPubImg(e.target.value)}
                        readOnly
                    />
                    <Button onClick={sendPost} type="submit">
                        POST
                    </Button>
                </Div>
            </Form>
        </Postbox>
    );
}