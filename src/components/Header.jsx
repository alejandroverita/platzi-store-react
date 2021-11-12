import React from 'react';

import '../styles/Header.scss';

const Header = () => {
    return (
        <nav>
            <img src="./assets/icons/icon_menu.svg" className='menu' alt="Burger Menu" />
            <div className="navbar-left">
                <img src="./assets/logos/logo_yard_sale.svg" className='logo' alt="Logo" />
                <ul>
                    <li><a href="/">All</a></li>
                    <li><a href="/">Clothes</a></li>
                    <li><a href="/">Electronic</a></li>
                    <li><a href="/">Furnitures</a></li>
                    <li><a href="/">Toys</a></li>
                    <li><a href="/">Other</a></li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email">example@gmail.com</li>
                    <li className='navbar-shopping-cart'>
                        <img src="./assets/icons/icon_shopping_cart.svg" alt="Shop" />
                        <span>2</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;