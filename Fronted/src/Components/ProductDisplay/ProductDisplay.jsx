import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../IMG/star_icon.png';
import star_dull_icon from '../IMG/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';




const ProductDisplay=(props)=> {
  const {product}=props;
  const {addToCart}=useContext(ShopContext);
  return (
    <div className='productdisplay'>
       <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />

        </div>
        <div className="productdisplay-img">
         <img className='productdisplay-main-img' src={product.image} alt="" />
        </div>
        </div>
      <div className="productdisplay-rigth">
        <h1>{product.name}</h1>
        <div className="productdisplay-start">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>

        </div>
         <div className="productdisplay-rigth-pric">
           <div className="productdisplay-rigth-price-old">
            ${product.old_price}
           </div>
           <div className="productdisplay-rigth-price-new">
            ${product.new_price}
           </div>
         </div>
         <div className="productdisplay-rigth-description">
         E-commerce websites should offer multiple payment methods, such as credit cards and digital wallets. Payment gateways should encrypt data to protect sensitive financial information.
         </div>
         <div className="productdisplay-rigth-size">
          <h1>Select Size</h1>
           <div className="productdisplay-rigth-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
           </div>
         </div>
         <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
         <p className='productdisplay-rigth-catagory'><span>Category :</span>Women,T-Shirt, Crop Top</p>
         <p className='productdisplay-rigth-catagory'><span>Tags :</span>Modern,Latest</p>

        </div>   
    </div>
  )
}

export default ProductDisplay