import React, { useState, useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyles';
import { Home } from './componentes/Home';
import { Sidebar } from './componentes/Sidebar';
import { Widgets } from './componentes/Widgets';
import { Login } from './componentes/Login';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    // Verificar si el usuario está autenticado
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Usuario autenticado, establece el usuario en el estado
        setUser(user);
      } else {
        // Usuario no autenticado, establece el usuario en null
        setUser(null);
      }
    });

    // Limpiar el listener cuando el componente se desmonte
    return () => unsubscribe();
  }, [auth]);

  return (
    <div className="App">
      {/* Renderizar el componente de inicio de sesión si el usuario no está autenticado */}
      {!user && <Login />}
      
      {/* Renderizar la página principal si el usuario está autenticado */}
      {user && (
        <>
          {/* Sidebar */}
          <Sidebar />
          {/* Home */}
          <Home />
          {/* Widgets */}
          <Widgets />
          <GlobalStyles />
        </>
      )}
    </div>
  );
}

export default App;