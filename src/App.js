import React, { Component, useState } from 'react';

import './App.css';
import ProductHome from './products/productHome';
import Home from './ui/home';
import Sitefooter from './ui/sitefooter';
import Siteheader from './ui/siteheader';


function App() {
  return (
    <div className='container-fluid'>
      <Siteheader />
      {/* <Home /> */}
      <ProductHome />
      <Sitefooter />
    </div>
  );
}


export default App;
