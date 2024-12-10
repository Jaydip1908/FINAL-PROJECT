import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'

import logo from '../IMG/logo.png'
import cart_icon from '../IMG/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../IMG/nav_dropdown.png'

function Navbar() {

  const [data, setData] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef=useRef();

  const dropdown_toggle = (e)=>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='Navar'>
      <div className='nav-logo'>
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <img className='nav-dropdwon' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setData("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {data === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setData("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link> {data === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setData("womens") }}> <Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link> {data === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setData("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>  {data === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        {/* {localStorage.getItem('auth-token')
        ? <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout<button/>
        :<Link to='/login'><button>Login</button></Link>} */}
        {localStorage.getItem('auth-token') ? (
          <button
            onClick={() => {
              localStorage.removeItem('auth-token');
              window.location.replace('/');
            }}
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}


        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar