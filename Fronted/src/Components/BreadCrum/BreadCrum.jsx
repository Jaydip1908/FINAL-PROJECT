import React from 'react'
import './BreadCrum.css'
// import PropTypes from 'prop-types';
import arrow_icon from '../IMG/breadcrum_arrow.png'

function BreadCrum(props) {
  const { product } = props;

  
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" />
        SHOP <img src={arrow_icon} alt="" /> 
        {product.category} 
        <img src={arrow_icon} alt="" />
        {product.name}
     
    </div>
  )
}



export default BreadCrum;
