import Signin from './signin';
import Signup from './signup';
import Home from './home';
import Contact from './contact';
// import About from './about';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Pro from './pages/shop/pro';
import LabTest from './labtest';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import './App.css';
import { ShopContextProvider } from './context/shop-context';
import Labform from './labform';
import Pay from './pay';
function App() {
  return (
    <BrowserRouter>
   
    <div>
      <ShopContextProvider>
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/labtest" element={<LabTest/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/labform" element={<Labform/>}/>
        <Route path='/pay' element={<Pay/>}/>
        <Route path='/signin' element={<Signin/>}/>
        </Routes>
        </ShopContextProvider>
      </div>
    </BrowserRouter>

  );
}

export default App;
