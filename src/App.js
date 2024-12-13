import React, { Component, useState } from 'react';

import './App.css';
import ProductHome from './products/productHome';
import Home from './ui/home';
import Sitefooter from './ui/sitefooter';
import Siteheader from './ui/siteheader';
import { Route, Routes } from 'react-router';
import Login from './ui/login';
import ProductDetails from './routed/ProdDetails';
import ProdDetails from './routed/ProdDetails';
import ProdList from './routed/ProdList';


function App() {
 // debugger;
  return (
    <div className='container-fluid'>
      <Siteheader />
      <Routes>
        <Route path='/routed' element={<ProdList />} />
        <Route path='/routed/:id' element={<ProdDetails />} />
        <Route path='/products' element={<ProductHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Sitefooter />
    </div>
  );
}


export default App;
