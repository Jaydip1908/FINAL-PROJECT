import React, { useState,useEffect } from 'react'
import './Popular.css'
// import data_product from '../IMG/data'
import Item from '../Item/Item'

function Popular() {

  const [poppularproduct,setPoppularproduct]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/poppulerinwomen')
    .then((response)=>response.json())
    .then((data)=>setPoppularproduct(data));
  },[])


  return (
    <div className='popular'>
        <h1>POPPULAR IN WOMEN</h1>
        <hr />
        <div className="popular-item mb-5">
            {poppularproduct.map((item,i)=>{
                return <Item key={i} id={item._id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div> 

  )
}

export default Popular