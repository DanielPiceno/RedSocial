import React, { useState, useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Home } from './componentes/Home';
import { Mensajes } from './componentes/Mensajes';
import { Perfil } from './componentes/Perfil';
import { Sidebar } from './componentes/Sidebar';
import { Widgets } from './componentes/Widgets';
import { Login } from './componentes/Login';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Asegúrate de importar tu configuración de Firebase

function App() {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]); // Estado para almacenar la lista de usuarios
  const [paginaPrincipal, setPaginaPrincipal] = useState('Home');
  const [nombreUsuarioSeleccionado, setNombreUsuarioSeleccionado] = useState(null); // Estado para almacenar el nombre del usuario seleccionado

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, 'users');
      const userDocs = await getDocs(usersCollection);
      setUsers(userDocs.docs.map(doc => doc.data()));
    };

    fetchUsers();
  }, []);

  const verPerfil = (username) => {
    setNombreUsuarioSeleccionado(username); // Almacena el nombre del usuario seleccionado
    setPaginaPrincipal('Perfil'); // Cambia la página principal a 'Perfil'
  };

  const verHome = () => {
    setPaginaPrincipal('Home');
  };

  const verMensajes = () => {
    setPaginaPrincipal('Mensajes');
  };

  return (
    <div className="App">
      {!user && <Login />}
      {user && (
        <>
          <Sidebar verPerfil={verPerfil} verHome={verHome} verMensajes={verMensajes} />
          {paginaPrincipal === 'Home' && <Home />}
          {paginaPrincipal === 'Perfil' && <Perfil username={nombreUsuarioSeleccionado} />} {/* Pasa el nombre de usuario al componente Perfil */}
          {paginaPrincipal === 'Mensajes' && <Mensajes currentUser={user} users={users} />} {/* Pasa currentUser y users */}
          <Widgets verPerfil={verPerfil} />
          <GlobalStyles />
        </>
      )}
    </div>
  );
}

export default App;
