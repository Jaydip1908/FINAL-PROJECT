import React, { useContext } from 'react'
import  { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/BreadCrum/BreadCrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
// import all_product from '../../../Admin/src/Components/ListProduct/ListProduct';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBOx';
import ReletedProduct from '../Components/RelatedProduct/ReletedProduct';
import { useState,useEffect } from 'react';
// import all_product from '../Components/IMG/all_product';

function Product() {

  const { productId } = useParams(); // Correct destructuring of productId
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
  }, [allproduct]); // Logs the value after it updates

  const product = allproduct?.find((pro) => pro._id === productId); // Use optional chaining
  console.log(product);
  
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <ReletedProduct/>
    </div>
  )
}

export default Product