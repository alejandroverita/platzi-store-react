import React from 'react';

import '@styles/Header.scss';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg'

const Header = () => {
    return (
        <nav>
            <img src={menu} className='menu' alt="Burger Menu" />
            <div className="navbar-left">
                <img src={logo} className='nav-logo' alt="Logo" />
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
                    <img src={shoppingCart} alt="Shop" />
                        <span>2</span>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;