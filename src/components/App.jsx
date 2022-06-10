import React from 'react';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import '../styles/global.css';


const App = () => {
    return(
        <Layout>
            <Login /> {/* se puede abrir y cerrar en la misma etiqueta o podemos <Login></Login> o se puede ambas funcionan <Login/> , se deja un espacio para que con el llamado {children}, se añadan componentes.los nombres(<Layout>,<Login /> ) de etiquetas se crearon en la carpeta de containers y son llamadas de html, si no va a recibir ningún valor la estructura recomendada es <Login /> */}
            <RecoveryPassword />
        </Layout>
    );
}
export default App;