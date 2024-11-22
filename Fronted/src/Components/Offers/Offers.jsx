import React from 'react'
import './Offers.css'
import exclusive_img from '../IMG/exclusive_image.png'

function Offers() {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Exclutive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-rigth">
                <img src={exclusive_img} alt="" />
            </div>
        </div>
    )
}

export default Offers