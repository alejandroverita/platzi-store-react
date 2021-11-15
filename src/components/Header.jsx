import React, {useState, useContext} from 'react';

import '@styles/Header.scss';

import Menu from '@components/Menu';
import MyOrder from '@containers/MyOrder';

import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '@context/AppContext';
import shoppingCart from '@icons/icon_shopping_cart.svg'

const Header = () => {
    const[toggle, setToggle] = useState(false);

    const [toggleOrders, setToggleOrders]= useState(false);

    //conecta la app
    const {state} = useContext(AppContext);

    const handleToggle = ()=> {
        setToggle(!toggle)
    }

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
                    <li className="navbar-email" onClick={handleToggle}> example@gmail.com</li>
                    <li className='navbar-shopping-cart' onClick={setToggleOrders(!toggleOrders)}>
                    <img src={shoppingCart} alt="Shop" />
                        {state.cart.length > 0 ? <span>{state.cart.length}</span> : null }
                    </li>
                </ul>
            </div>
            {toggle ? <Menu /> : null}
            {toggleOrders && <MyOrder />}
        </nav>
    );
}

export default Header;