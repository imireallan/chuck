import React from 'react';
import '../css/Header.css'

function Header() {
	return (
        <header className="header">
            <div className="container flex">
                <a className="header__logo" href="#">Chuck Norris<sup>JOKES</sup></a>
                <nav className="nav">
                    <ul className="nav__list flex">
                        <li className="nav__list__item"><a className="nav__link" href="#">home</a></li>
                        <li className="nav__list__item"><a className="nav__link" href="#">about</a></li>
                        <li className="nav__list__item"><a className="nav__link" href="#">contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
