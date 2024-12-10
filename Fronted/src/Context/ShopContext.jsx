import React from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
// import all_product from '../Components/IMG/all_product'

export const ShopContext = createContext(null);



const ShopContextProvider = (props) => {

  const [all_product, setAll_Product] = useState([]);

  const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length; index++) {
      cart[index] = 0;
    }
    return cart;
  }


  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch('http://localhost:8000/allproducts')
      .then((response) => response.json())
      .then((data) => setAll_Product(data))
  }, [])
  // useEffect(() => {
  //   fetch('http://localhost:8000/allproducts')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log("Fetched products:", data);
  //       setAll_Product(data);
  //     })
  //     .catch((error) => console.error("Failed to fetch products:", error));
  // }, []);

  
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }
  // console.log(cartItems)

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  // const getTotalCartAmount=()=>{
  //     let totalAmount=0;
  //     for(const item in cartItems)
  //     {
  //         if(cartItems[item]>0)
  //         {
  //             let itemInfo=all_product.find((product)=>product.id===Number(item))
  //             totalAmount += itemInfo.new_price*cartItems[item];

  //         }
  //         return totalAmount;
  //     }
  // }

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) { // Ensure itemInfo is found before accessing properties
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }

    return totalAmount; // Move the return statement outside the loop
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item]
      }
    }
    return totalItem;
  }


  // console.log(cartItems)
  const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart, };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}
export default ShopContextProvider

