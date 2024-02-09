import Navbar from './components/navbar/Navbar';
import {  Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from './components/MainPage/mainPage';
import Product from './components/product/product';
import User from './components/user/user';
import ProductDetail from './components/productDetail/productDetail';
import ProductAdd from './components/productAdd/productAdd';
function App() {
  return (

    <div>
      <div className='container mainContainer'>
        <div className="row">
          <div className="col-2">
            <Navbar />

          </div>
          <div className="col-10 main">
            <Routes>
                <Route index element={<MainPage />} />
                <Route path="/products" element={<Product />} />
                <Route path="/users" element={<User />} />
                <Route path="/productDetail/:id" element={<ProductDetail />} />
                <Route path="/productAdd" element={<ProductAdd />} />


            </Routes>

          </div>
        </div>

      </div>


    </div>
  );
}

export default App;
