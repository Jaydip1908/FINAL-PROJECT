import React from 'react'
import './ReletedProduct.css'
import data_product from '../IMG/data'
import Item from '../Item/Item'

const ReletedProduct=(props) =>{

  const { item } = props;
  return (
    <div className='reletedproduct'>
        <h1>Releted Product</h1>
        <hr />
        <div className="reletedproduct-item">
            {data_product.map((item,i)=>{
                    
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    // console.log(item)
        })}

        </div>

    </div>
  )
}

export default ReletedProduct