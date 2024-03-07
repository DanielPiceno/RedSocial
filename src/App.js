import React from 'react'
import GlobalStyles from './styles/GlobalStyles';
import { Home } from './componentes/Home';
import { Sidebar } from './componentes/Sidebar';
import { Widgets } from './componentes/Widgets';


function App() {
  return (
    <div className="App">
        {/*Sidibar */}
        <Sidebar>
          
        </Sidebar>

        {/*Home*/}
        <Home></Home>
        {/*Widgets*/}
        <Widgets />
        <GlobalStyles  />
    </div>
  );
}

export default App;
