import React, { useContext,useState,useEffect } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../IMG/cart_cross_icon.png'

const CartItems = () => {
      const [allproduct, setAllProduct] = useState(null);
    
      useEffect(() => {
        fetch('http://localhost:8000/allproducts')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            setAllProduct(data);
          })
          .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
          });
      }, []); // Empty dependency array ensures this runs only once
    
      useEffect(() => {
        if (allproduct) {
          console.log(allproduct); // Logs whenever allproduct updates
        }
      }, [allproduct]);
      const {getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext)
    return (
        <div className='cartitems'>
            <div className="cartitems-formate-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p> 
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e._id] > 0) {
                    return <div key={e._id}>
                    <div className="cartitems-formate cartitems-formate-main">
                        <img src={e.image} alt="" className='carticon-product-icon' />
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e._id]}</button>
                        <p>${e.new_price * cartItems[e._id]}</p>
                        <img className='carticon-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e._id) }} alt="" />
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Shopping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className='cartitems-total-item'>
                            <p>Total</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                    </div>
                     <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promo code, Enter it here</p>
                    <div className='cartitems-promobox'>
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems