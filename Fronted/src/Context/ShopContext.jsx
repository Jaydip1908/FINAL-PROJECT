import React from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
// import all_product from '../Components/IMG/all_product'

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i <  100+ 1; i++) {
    cart[i] = 0;
  }
  return cart;
}



const ShopContextProvider = (props) => {

  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());
  // console.log(allproduct)
  // useEffect(() => {
  //   fetch('http://localhost:8000/allproducts')
  //   .then((response) => response.json())
  //   .then((data) => setAllProduct(data))
  // }, [])
  useEffect(() => {
    fetch('http://localhost:8000/allproducts')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched products:", data);
        setAll_Product(data);
      })
      .catch((error) => console.error("Failed to fetch products:", error));

    // if (localStorage.getItem('auth-token')) {
    //   fetch('http://localhost:8000/getCart', {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'auth-token': `${localStorage.getItem('auth-token')}`,
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ "itemId":itemId })
    //   })
    //     .then((response) => response.json())
    //     .then((data) => { setCartItems(data) })

    // }
  }, []);


  // const addToCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  //   if (localStorage.getItem('auth-token')) {
  //     fetch('http://localhost:8000/addtocart', {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'auth-token': `${localStorage.getItem('auth-token')}`,
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ "itemId":itemId}),
  //     })
  //       .then((response) => response.json())
  //       .then((data) => { console.log(data) })
    //   fetch('http://localhost:8000/addtocart', {
    //     method: 'POST',
    //     headers: {
    //         Accept: 'application/json',
    //         'auth-token': `${localStorage.getItem('auth-token')}`,
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ itemId }),
    // })
    //     .then((response) => {
    //         if (!response.ok) {
    //             throw new Error(`HTTP error! Status: ${response.status}`);
    //         }
    //         return response.json(); // Parse JSON response
    //     })
    //     .then((data) => {
    //         console.log(data.message); // Log the success message
    //     })
    //     .catch((error) => {
    //         console.error("Error adding to cart:", error);
    //     });
    
    // }

  // }
  // console.log(cartItems) 
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:8000/addtocart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
};


  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:8000/removeFromCart', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "itemId": itemId }),
      })
        .then((response) => response.json())
        .then((data) => { console.log(data) })
    }
  }

  // const getTotalCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const item in cartItems) {
  //     if (cartItems[item] > 0) {
  //       let itemInfo = all_product.find((product) => product._id === Number(item))
  //       totalAmount += itemInfo.new_price * cartItems[item];

  //     }
  //     return totalAmount;
  //   }
  // }

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product._id === Number(item));

        if (itemInfo) {  // Make sure itemInfo exists
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;  // Move the return statement outside of the loop
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

