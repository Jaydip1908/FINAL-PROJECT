import React, { useContext, useState } from 'react'
import './Navbar.css'

import logo from '../IMG/logo.png'
import cart_icon from '../IMG/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

function Navbar() {

  const [data, setData] = useState("shop");
  const {getTotalCartItems}=useContext(ShopContext);

  return (
    <div className='Navar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setData("shop") }}><Link style={{textDecoration:'none'}} to='/'>Shop</Link> {data === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setData("mens") }}><Link style={{textDecoration:'none'}} to='/mens'>Men</Link> {data === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setData("womens") }}> <Link style={{textDecoration:'none'}} to='/womens'>Women</Link> {data === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setData("kids") }}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link>  {data === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar