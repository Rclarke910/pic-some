import React from "react"
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <Link to='/'><h2>Pic Some</h2></Link>
            <Link to='/cart'><FaShoppingCart className="ri-shopping-cart-line ri-fw ri-2x" /></Link>
        </header>
    )
}

export default Header;
