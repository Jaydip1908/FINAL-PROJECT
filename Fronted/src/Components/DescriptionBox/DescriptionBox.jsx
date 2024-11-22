import React from 'react'
import './DescriptionBox.css'

function DescriptionBox() {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigation">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-discription">
            <p>An ecommerce website is an online store where customers can find products, browse offerings, and place purchases online. It facilitates the transaction between a buyer and seller. A digital storefront can serve as the virtual equivalent of the product shelves, sales staff, and cash register of a physical shop.</p>
            <p>E-commerce websites allow customers to browse products, place orders, and make payments. They also allow businesses to process orders, manage shipping and logistics, and provide customer service.</p>
        </div>
    </div>
  )
}

export default DescriptionBox