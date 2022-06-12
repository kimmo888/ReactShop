import React from 'react';
import Header from '../components/Header';

const Layout = ({children}) => {  /* //?la palabra children es to da en minúsculas para no generar error */
    return (
    <div className='Layout'>
        <Header />
        {children}
    </div>
    );
}

export default Layout;
