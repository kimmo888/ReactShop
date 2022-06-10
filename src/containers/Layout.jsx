import React from 'react';

const Layout = ({children}) => {  /* //?la palabra children es to da en minúsculas para no generar error */
    return (
    <div className='Layout'>
        {children}
    </div>
    );
}

export default Layout;
