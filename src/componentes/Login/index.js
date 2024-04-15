import React from 'react';
import { LoginContainer, Button, WelcomeText, Img, ImageContainer } from './styles';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { collection, getDocs, addDoc, query, where } from 'firebase/firestore'; // Importa los métodos necesarios
import { db } from '../../firebase';
import logo from '../../images/logo1.jpeg';

const provider = new GoogleAuthProvider();

export const Login = () => {
    const auth = getAuth();

    const loginGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            // Verificar si el usuario ya existe en la base de datos
            const usersRef = collection(db, 'users');
            const userQuery = query(usersRef, where('userId', '==', user.uid));
            const querySnapshot = await getDocs(userQuery);

            // Si el usuario no existe, agregarlo a la base de datos
            if (querySnapshot.empty) {
                await addDoc(usersRef, {
                    userId: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    // Otros datos del usuario que desees guardar
                });
                alert(`Bienvenido, ${user.displayName}!`);
            } else {
                alert('Usuario ya registrado.');
            }
        } catch (error) {
            console.error('Error al iniciar sesión con Google:', error.message);
        }
    };

    return (
        <LoginContainer>
            <WelcomeText>BIENVENIDO A UNICHAT</WelcomeText>
            <ImageContainer>
            <Img src={logo} alt='LogoUnichat' />
            </ImageContainer>
          <Button onClick={loginGoogle} center>Iniciar sesión con Google</Button>
        </LoginContainer>
    );
};

export default Login;