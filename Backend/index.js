const express = require ('express');
const port=8000
const app = express();
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken')
const multer=require('multer');
const path=require('path');
const cors = require('cors');
const { type } = require('os');
// const { error } = require('console');
const { emit } = require('process') ;

app.use(cors());
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
    image:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
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

//user model
const Users=mongoose.model('Users',{
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    cartData:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
})
// const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: Number,
    name: String,
    image: String,
    category: String,
    new_price: Number,
    old_price: Number
});

const Produc = mongoose.model('Produc', ProductSchema);


//register user
app.post('/signup' ,async(req,res)=>{
    let check=await Users.findOne({email:req.body.email });
    if (check) {
        return res.status(400)
        .json({success:false,error:"existing user found with same email address"})
    }
    let cart={};
    for (let i = 0; i < 100; i++) {
        cart[i]=0;
    }
    const user=new Users({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartData:cart
    })

    await user.save();

    const data={
        user:{
            _id:user.id
        }
    }
    const token=jwt.sign(data,'secret_ecom')
    res.json({success:true,token})
})



//login app.
app.post('/login' ,async (req,res)=>{
    let user=await Users.findOne({email:req.body.email});
    if (user) {
        const passCompare=req.body.password === user.password;
        if (passCompare) {
            const data={
                user:{
                    _id:user.id
                }    
            }
            const token=jwt.sign(data,'secret_ecom');
            res.json({
                success:true,token
            });
        }
        else{
            res.json({success:false,error:"Wrong Password,Check the Password"})
        }
    } 
    else{
        res.json({success:false,error:"Wrong Email"})
    }

})

//addproduct

// app.post('/addproduct',async (req,res)=>{
//     let products=await Product.find({});
//     let id;
//     if (products.length>0) {
//         let last_product_array=products.slice(-1);
//         let last_product=last_product_array[0];
//         id=last_product.id+1;
//     }else{
//         id=1;
//     }

    
//     const product=new Product ({
//         id:req.body.id,
//         name:req.body.name,
//         image:req.body.image,
//         category:req.body.category,
//         new_price:req.body.new_price,
//         old_price:req.body.old_price
//     });
//     console.log(product);
//     await product.save();
//     console.log("Saved");
//     res.json({
//         success:true,
//         name:req.body.name,
//     })
// })
// app.post('/addproduct', async (req, res) => {
//     try {
//         let products = await Product.find({}).sort({id: -1}).limit(1);
//         let id = products.length > 0 ? products[0].id + 1 : 1;
        
//         const product = new Product({
//             id: id,
//             name: req.body.name,
//             image: req.body.image,
//             category: req.body.category,
//             new_price: req.body.new_price,
//             old_price: req.body.old_price
//         });
//         console.log(product);
//         await product.save();
//         console.log("Saved");

//         res.json({
//             success: true,
//             name: req.body.name,
//         });
//     } catch (error) {
//         console.error('Error adding product:', error);
//         res.status(500).json({ success: false, message: 'Failed to add product' });
//     }
// });
app.post('/addproduct', async (req, res) => {
    try {
        let products = await Produc.find({}).sort({ id: -1 }).limit(1);
        let id = products.length > 0 ? products[0].id + 1 : 1;

        const product = new Produc({
            id: id,
            name: req.body.name,
            image: req.body.image,
            category: req.body.category,
            new_price: req.body.new_price,
            old_price: req.body.old_price
        });

        console.log(produc);

        await produc.save();
        console.log("Saved");

        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ success: false, message: 'Failed to add product' });
    }
});



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
    // console.log(products)
})


//end poin for poppulaer in women
app.get('/poppulerinwomen' ,async (req,res)=>{
    let products=await Product.find({category:"women"});
    let poppulerinwomen=products.slice(0,4);
    console.log("poppulerinwomen fetch");
    res.send(poppulerinwomen);

})

//newcollection
app.get('/newcollection' ,async (req,res)=>{
    let products=await Product.find({});
    let newcollections=products.slice(1).slice(-8);
    console.log("newcollections fetch");
    res.send(newcollections);
})
//middelware to fetch user
    // const fetchUser=async(req,res,next)=>{
    //     const token=req.header('auth-token');
    //     if (!token) {
    //         res.status(401).send({
    //             errors:"Pleace authenticate using valid token"
    //         })
    //     }
    //     else{
    //         try {
    //            const data=jwt.verify(token,'secret_ecom');
    //            req.user=data.user;
    //            next(); 
    //         } catch (error) {
    //            res.status(401).send({
    //             errors:"pleace authnicate using a valid token"
    //            }) 
    //         }
    //     }
    // }
    const fetchUser = async (req, res, next) => {
        const token = req.header('auth-token');
        if (!token) {
            return res.status(401).send({
                errors: "Please authenticate using a valid token"
            });
        } else {
            try {
                const data = jwt.verify(token, 'secret_ecom');
                req.user = data.user;
                next();
            } catch (error) {
                return res.status(401).send({
                    errors: "Please authenticate using a valid token"
                });
            }
        }
    }
    

//add product in cartdata
app.post('/addtocart',fetchUser, async(req,res)=>{
    console.log(req.body,req.user);
    console.log("added",req.body.itemId);
    // console.log(itemId)
    let userData=await Users.findOne({_id:req.user.id});
    // userData.cartData[req.body.itemId] +=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added")
})  


//remove from cart
app.post('/removeFromCart',fetchUser, async(req,res)=>{
    console.log("removed",req.body.itemId);
    let userData=await Users.findOne({_id:req.user.id});
    // if (userData.cartData[req.body.itemId] > 0) 
    // userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("removed")
}) 

//get caerData
app.post('/getCart',fetchUser,async(req,res)=>{
    console.log("getcart")
    let userData=await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
    // console.log("CartData",cartData)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


