import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import {Link} from 'react-router-dom';

const Header = (props) => { 
    return(
        <Link to="/">
            <AppBar position="static" color="primary">
                <div className='header'>
                <h1 className='title title-left'>Lista de Compras</h1>
                </div>
            </AppBar>
        </Link>

    );
}

export default Header;
