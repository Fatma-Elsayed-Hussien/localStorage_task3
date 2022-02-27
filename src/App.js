import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Header/>
      {localStorage.getItem("token") ? (
        <Routes>
          <Route path = "/" element = {<Welcome/>}/>
          <Route path = "/products" element = {<Products/>}/>
          <Route path = "/products/:productId" element = {<ProductDetails/>}/>
          <Route path = "/*" element = {<NotFound/>}/>
        </Routes>
      ) : (
        <Routes>
          <Route path = "/" element = {<Login/>}/>
          <Route path = "/*" element = {<NotFound/>}/>
        </Routes>
      )

      }
    </div>
  );
}

export default App;
