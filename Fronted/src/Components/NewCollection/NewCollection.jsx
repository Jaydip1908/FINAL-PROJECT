import React from 'react'
import './NewCollection.css'
// import new_collection from '../IMG/new_collections'
import Item from '../Item/Item'
import { useState } from 'react'
import { useEffect } from 'react';

function NewCollection() {
 
  const [new_collection,setNewCollection]=useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/newcollection')
    .then((response)=>response.json())
    .then((data)=>setNewCollection(data));
  },[])

  return (
    <div className='newcollections'>
        <h1>NEW COLLECTION</h1>
        <hr />
        <div className="colletions ">
            {new_collection.map((item,index)=>{
                return <Item  key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollection