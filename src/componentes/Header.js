import React from 'react';
import App from './App';

const Header = props => {
    return (

        <header className="top">
            <h1>
                {props.titulo}
            </h1>
        </header>
    )
}

export default Header;