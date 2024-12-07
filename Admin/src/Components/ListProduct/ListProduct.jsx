import React, { useEffect, useState } from 'react'
import './ListProduct.css'
import cross_icon from '../../assets/cross_icon.png'

function ListProduct() {
  

  const [allProducts, setallProducts] = useState([]);

  const fetchInfo = async () => {

    await fetch('http://localhost:8000/allproducts')
      .then((res) => res.json())
      .then((data) => { setallProducts(data) });
  }

  useEffect(() => {
    fetchInfo();
  }, [])

 

  // useEffect(() => {
  //   fetchInfo();
  // }, []);


  const remove_product = async (id) => {
    await fetch('http://localhost:8000/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id })
    })
    await fetchInfo();
  }

  return (
    <div className='list-product'>
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
          {allProducts.map((product,index)=>{
            return <> 
            <div key={index} className="listproduct-format-main listproduct-formate">
              <img src={product.img} alt="" className="listproduct-product-icon" />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img onClick={()=>{remove_product(product.id)}} className='listproduct-remove-icon' src={cross_icon} alt="" />
            </div>
            <hr /></>
          })}
      </div>
      {/* <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product) => (
          <React.Fragment key={product.id}>
            <div className="listproduct-format-main listproduct-formate">
              <img
                src={product.img}
                alt=""
                className="listproduct-product-icon"
              />
              <p>{product.name}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img
                onClick={() => {
                  remove_product(product.id);
                }}
                className="listproduct-remove-icon"
                src={cross_icon}
                alt=""
              />
            </div>
            <hr />
          </React.Fragment>
        ))}
      </div> */}

    </div>
  )
}

export default ListProduct