import './App.css'
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/Shop';
import Product  from './Pages/Product';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/IMG/banner_mens.png'
import women_banner from './Components/IMG/banner_women.png'
import kids_banner from './Components/IMG/banner_kids.png'
import ShopCategory from './Pages/ShopCategory';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/>
          {/* <Route path='/mens' element={<ShopCatagory banner={men_banner} catagory={"men"}/>}/> */}
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />

          <Route path='/womens' element={<ShopCategory banner={women_banner} category={"women"}/>}/>
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category={"kid"}/>}/>

          <Route path='product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>

          <Route path='cart' element={<Cart/>}/>
          <Route path='login' element={<LoginSignup/>}/>
        
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;
