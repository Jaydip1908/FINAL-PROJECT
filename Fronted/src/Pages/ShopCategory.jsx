import React from 'react'
import './CSS/ShopCatagory.css'
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/IMG/dropdown_icon.png'
import Item from '../Components/Item/Item';

function ShopCategory(props) {

  const {all_product}=useContext(ShopContext)
  return (
    <div className='shop-catagory'>
      <img className='shopcategory-banner' src={props.banner} alt="banner" />
      {/* <div className="" {props.category} ></div> */}
      <div className="shopcatagery-indexSort">
        <p>
          <span>Showing 1-12</span>out of 36 products
        </p>
          <div className="shopcatagery-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
      </div>
      <div className="shopcatagory-products">
          {all_product.map((item,i)=>{
              if (props.category===item.category) {
                return <Item  key={i} id={item._id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              } 
              else{
                return null;
              }
          })}
      </div>
      <div className="shopcatagort-loadmore">
        Explore More
      </div>
    </div>  
  )
}

export default ShopCategory


