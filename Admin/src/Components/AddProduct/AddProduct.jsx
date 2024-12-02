import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/upload_area.svg'
// import Admin from '../../Pages/Admin/Admin'

function AddProduct() {

  const [img,setImg]=useState(false);
  const [productDetails,setproductDetails]=useState({
    name:'',
    img:'',
    category:'men',
    new_price:'',
    old_price:''  
  })

  const imageHandler = (e) =>{
    setImg(e.target.files[0]);
  }

  const changeHandler=(e)=>{
    setproductDetails({...productDetails,[e.target.name]:e.target.value})
  }

  const Add_Product=async()=>{ 
    console.log(productDetails);
    let responceData;
    let product=productDetails;

    let formData=new FormData();

    formData.append('product',img);

    await fetch ('http://localhost:8000/upload',{
      method:'POST',
      headers:{
        Accept:'application/json',
      },
      body:formData,
    }).then((resp)=>resp.json()).then((data)=>{responceData=data});

    if (responceData.success) {
      product.img=responceData.img_url;
      console.log(product);
      await fetch('http://localhost:8000/addproduct',{ 
        method:'POST',
        headers:{
          Accept:'application/json',
          // 'Content-Type':'application/json',
        },
        body:JSON.stringify(product),
      }).then((resp)=>resp.json()).then((data)=>{
        data.success?alert("Product Added"):alert("Failed")
      })
    }
  }

  // const Add_Product = async () => {
  //   console.log(productDetails);
  
  //   let responseData;
  //   let product = productDetails;
  
  //   let formData = new FormData(); // Correct capitalization
  //   formData.append('product', img); // Assuming `img` is a File or Blob
  
  //   const reaponse= await fetch('http://localhost/upload', { // Correct URL
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //     },
  //     body: formData, // Correct formData usage
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       responseData = data; // Consistent variable naming
  //     });
  
  //   if (responseData.success) {
  //     product.img = responseData.image_url;
  //     console.log(product);
  //   }
  // };
  

  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
          <p>Product title</p>
          <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type Here' />

        </div>
        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type Here' />
          </div>
          <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type Here' />
          </div>
        </div>
        <div className="addproduct-itemfield">
          <p>Product Category</p>
          <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="kid">Kid</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <label htmlFor="file-input">
            <img src={img?URL.createObjectURL(img): upload_area} className='addproduct-thumnail-img' alt="" />
          </label>
          <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
        </div>
        <button onClick={()=>{Add_Product()}} className='addproduct-btn'>ADD</button>
    </div>
  )
}

export default AddProduct