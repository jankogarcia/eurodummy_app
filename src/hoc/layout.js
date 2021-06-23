import React from 'react';
import Header from '../components/header/header';

const Layout = (props) => {
    return(
        <div>
            <center>
            <Header />
            {props.children}
            </center>
        </div>
    )
}

export default Layout;