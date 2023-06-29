import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import Products from './component/Products';
import Product from './component/Product';
import Login from './component/Login';
import About from './component/About';
import Contact from './component/Contact';
import Signup from './component/Signup';
import Cart from './component/Cart';

function App() {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route exact path="/" component={<Home />}></Route>
        <Route exact path="/products" component={Products} />
        <Home />
      </Routes> */}
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/contact" element={<Contact />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}></Route>
      </Routes>
    </>
  );
}

export default App;
