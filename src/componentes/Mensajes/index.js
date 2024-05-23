import React, { useState, useEffect } from 'react';
import { db } from '../../firebase'; // Importa tu configuración de Firebase
import { collection, addDoc, query, where, onSnapshot, orderBy, serverTimestamp } from 'firebase/firestore';
import { Container, Input, Button, Select, Contenedor2, ContenedorMensajes, InputContainer } from './styles';

export const Mensajes = ({ currentUser, users }) => {
    const [mensaje, setMensaje] = useState('');
    const [mensajes, setMensajes] = useState([]);
    const [recipient, setRecipient] = useState('');
    const [chatKey, setChatKey] = useState(null);

    useEffect(() => {
        console.log('Usuarios:', users);
        console.log('Mensajes:', mensajes);
        if (currentUser && recipient) {
            // Generar una clave única para identificar el chat entre los dos usuarios
            const generateChatKey = (user1, user2) => {
                const sortedUsers = [user1, user2].sort();
                return `${sortedUsers[0]}_${sortedUsers[1]}`;
            };

            // Actualizar la clave del chat cuando se seleccione un destinatario
            setChatKey(generateChatKey(currentUser.displayName, recipient));
        }
    }, [currentUser, recipient]);

    useEffect(() => {
        if (chatKey) {
            const q = query(
                collection(db, 'messages'),
                where('chatKey', '==', chatKey), // Filtrar mensajes por la clave del chat
                orderBy('timestamp')
            );

            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                const mensajes = [];
                querySnapshot.forEach((doc) => {
                    mensajes.push(doc.data());
                });
                setMensajes(mensajes);
            });

            return () => unsubscribe();
        }
    }, [chatKey]);

    const enviarMensaje = async () => {
        if (mensaje.trim() === '' || recipient === '') return;

        try {
            await addDoc(collection(db, 'messages'), {
                sender: currentUser.displayName, // Usa displayName
                recipient: recipient,
                message: mensaje,
                timestamp: serverTimestamp(),
                participants: [currentUser.displayName, recipient], // Usa displayName
                chatKey: chatKey // Agrega la clave del chat al documento del mensaje
            });
            setMensaje('');
        } catch (error) {
            console.error('Error enviando el mensaje: ', error);
        }
    };

    return (
        <Container>
            <Select value={recipient} onChange={(e) => setRecipient(e.target.value)}>
                <option value="">Selecciona un destinatario</option>
                {users.filter(user => user.displayName !== currentUser.displayName).map(user => (
                    <option key={user.uid} value={user.displayName}>{user.displayName}</option>
                ))}
            </Select>
            <div>
                {mensajes.length === 0 ? (
                    <p>Saluda a {recipient}</p>
                ) : (
                    
                    mensajes.map((msg, index) => (
                    <ContenedorMensajes key={index} isCurrentUser={msg.sender === currentUser.displayName}>
                        <p><strong>{msg.sender}:</strong> {msg.message}</p>
                    </ContenedorMensajes>
                    ))
                )}
            </div>
            <InputContainer>
            <Input 
                type="text"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                placeholder="Escribe tu mensaje..."
            />
            <Button onClick={enviarMensaje}>Enviar</Button>
            </InputContainer>
        </Container>
    );
};

