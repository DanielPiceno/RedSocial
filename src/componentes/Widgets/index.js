import React, { useState, useEffect } from 'react';
import { Widget, Header, DivContent } from "./styles";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // Asegúrate de importar tu instancia de Firestore

export const Widgets = () => {
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        const fetchUserList = async () => {
            try {
                const usersCollectionRef = collection(db, 'users');
                const usersSnapshot = await getDocs(usersCollectionRef);
                const usersData = [];
                usersSnapshot.forEach((doc) => {
                    const userData = doc.data();
                    usersData.push(userData);
                });
                setUserList(usersData);
            } catch (error) {
                console.error('Error al obtener la lista de usuarios:', error);
            }
        };

        fetchUserList();
    }, []);

    return (
        <Widget>
            <Header>
                <h2>Usuarios</h2>
            </Header>
            {userList.map((user, index) => (
                <DivContent key={user.userId} style={{ marginBottom: '10px' }}>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li style={{ display: 'flex', alignItems: 'center' }}>
                            <img 
                                src={user.photoURL} 
                                alt="Profile" 
                                style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} 
                            />
                            <span style={{ verticalAlign: 'middle' }}>{user.displayName}</span>
                        </li>
                    </ul>
                </DivContent>
            ))}
        </Widget>
    );
};