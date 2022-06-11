import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import '../styles/global.css';


const App = () => {
    return(
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path='/' element={ <Home /> } />
                    <Route exact path="/login" element={ <Login /> } />
                    <Route exact path="/RecoveryPassword" element={ <RecoveryPassword  /> } />
                    <Route path="*" element={ <NotFound /> } />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
    {/* se puede abrir y cerrar en la misma etiqueta o podemos <Login></Login> o se puede ambas funcionan <Login/> , se deja un espacio para que con el llamado {children}, se añadan componentes.los nombres(<Layout>,<Login /> ) de etiquetas se crearon en la carpeta de containers y son llamadas de html, si no va a recibir ningún valor la estructura recomendada es <Login /> */}
}
export default App;