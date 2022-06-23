import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '@containers/Layout.jsx';
import Home from '@pages/Home';
import Login from '@pages/Login';
import PasswordRecovery from '@pages/PasswordRecovery';
import SendEmail from '@pages/SendEmail';
import NewPassword from '@pages/NewPassword';
import MyAccount from '@pages/MyAccount';
import CreateAccount from '@pages/CreateAccount';
import Checkout from '@pages/Checkout';
import Orders from '@pages/Orders';
import NotFound from '@pages/NotFound';
import AppContext from '@context/AppContext'; //importamos AppContext
import useInitialState from '@hooks/useInitialState'; //importamos useInitialState
import '@styles/global.css';


const App = () => {
    const initialState = useInitialState(); //agregamos esta linea
    return(
        <AppContext.Provider value={initialState}> {/* damos el valor initialState */}
            <BrowserRouter basename='/ReactShop/'> {/* basename='/ReactShop/'  */}
                <Layout>
                    <Routes>
                        <Route exact path='/' element={ <Home /> } />
                        <Route exact path='/Login' element={ <Login /> } />
                        <Route exact path='/PasswordRecovery' element={ <PasswordRecovery /> } />
                        <Route exact path="/SendEmail" element={ <SendEmail  /> } />
                        <Route exact path="/NewPassword" element={ <NewPassword /> } />
                        <Route exact path='/Account' element={ <MyAccount /> } />
                        <Route exact path='/Signup' element={ <CreateAccount /> } />
                        <Route exact path='/Checkout' element={ <Checkout /> } />
                        <Route exact path='/Orders' element={ <Orders /> } />
                        <Route path="*" element={ <NotFound /> } />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
    );
    {/* se puede abrir y cerrar en la misma etiqueta o podemos <Login></Login> o se puede ambas funcionan <Login/> , se deja un espacio para que con el llamado {children}, se añadan componentes.los nombres(<Layout>,<Login /> ) de etiquetas se crearon en la carpeta de containers y son llamadas de html, si no va a recibir ningún valor la estructura recomendada es <Login /> */}
}
export default App;