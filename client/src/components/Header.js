import React from 'react';
import '../css/Header.css'

function Header() {
	return (
        <header className="header">
            <div className="container center">
                <a className="header__logo" href="#">Chuck Norris<sup>JOKES</sup></a>
            </div>
        </header>
    );
}

export default Header;
