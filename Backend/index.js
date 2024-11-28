const express = require ('express');
const port=8000
const app = express();
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken')
const multer=require('multer');
const path=require('path');
const cors = require('cors');
const { type } = require('os');

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Wlecome To E-Commerce Web-Site");
});

//Database Conection with MongoDB
mongoose.connect("mongodb+srv://f451khandalajaydip:JK13264@imgdata.8n3ke.mongodb.net/img_data?retryWrites=true&w=majority&appName=imgdata")




//Image Storage

const storage=multer.diskStorage({
    destination:'./upload/img',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)

    }   
})

const upload=multer({storage:storage})
app.use('/img',express.static('upload/img'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,  
        img_url:`http://localhost:${port}/img/${req.file.filename}`
    })
})

const Product=mongoose.model("product",{
    id:{
        type:Number,
        require:true
    },
    name:{
        type:String,
        require:true
    },
    img:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    new_price:{
        type:Number,
        require:true
    },
    old_price:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    },
})
app.post('/addproduct',async (req,res)=>{
    let products=await Product.find({});
    let id;
    if (products.length>0) {
        let last_product_array=products.slice(-1);
        let last_product=last_product_array[0];
        id=last_product.id+1;
    }else{
        id=1;
    }
    const product=new Product ({
        id:req.body.id,
        name:req.body.name,
        img:req.body.img,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price
    })
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})

//delette Product
app.post('/removeproduct',async (req,res)=>{
    await Product.findOneAndDelete({id:req.body.id})
    console.log("Removed")
    res.json({
        success:true,
        name:req.body.name
    })
})

//getting all product
app.get('/allproducts',async (req,res)=>{ 
    let products =await Product.find({});
    console.log("all products fet ");
    res.send(products);
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


