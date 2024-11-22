import React from 'react'
import './NewCollection.css'
import new_collection from '../IMG/new_collections'
import Item from '../Item/Item'

function NewCollection() {
  return (
    <div className='newcollections'>
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="colletions">
            {new_collection.map((item,index)=>{
                return <Item  key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollection