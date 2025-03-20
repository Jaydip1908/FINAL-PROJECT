import React from 'react'
import './BreadCrum.css'
// import PropTypes from 'prop-types';
import arrow_icon from '../IMG/breadcrum_arrow.png'
// import props from 'react-router-dom'

function BreadCrum(props) {
const { product } = props;
// console.log(product)
return (
  <div className='breadcrum'>
    HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product?.category} <img src={arrow_icon} alt="" /> {product?.name}

  </div>
)
// const BreadCrum = (props) => {
//   const { product } = props;
//   if (!product || !product?.category || !product?.name) {
//     return null; // Or a fallback UI
//   }

//   return (
//     <div className="breadcrum">
//       HOME <img src={arrow_icon} alt="arrow" /> SHOP <img src={arrow_icon} alt="arrow" /> {product?.category} <img src={arrow_icon} alt="arrow" /> {product?.name}
//     </div>
//   );
};





export default BreadCrum;
