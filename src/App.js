import React, { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productData2,productData3,productData4,productData5,productData6,productData7 } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Orders from './components/Orders';
import Products2 from './components/Products2';



function App() {
  Aos.init();
  return (
    <Router>
      <GlobalStyle />
      <Hero />  
      <Orders  data={productData3} />
      <Products data={productData} />
      <Feature /> 
      <Products2 data={productData4}  />
      <Products data={productData2} />
      <Products2 data={productData5}/>
      <Products data={productData6} />
      <Products2  data={productData7} />
      <Footer />
    </Router>
  );
}

export default App;
