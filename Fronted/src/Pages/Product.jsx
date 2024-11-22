import React, { useContext } from 'react'
import ShopCategory, { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/BreadCrum/BreadCrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBOx';
import ReletedProduct from '../Components/RelatedProduct/ReletedProduct';
// import all_product from '../Components/IMG/all_product';

function Product() {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams()
  const product=all_product.find((e)=>e.id=== Number(productId))
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