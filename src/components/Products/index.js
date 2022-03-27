import React from 'react';
import Aos from "aos";

import {
  ProductsContainer,
  ProductWrapper,
  ProductHorario,
  ProductDesc,
  ProductCard,
  ProductCardInfo,
  ProductImg,
  ProductInfo,
  ProductPrice,
  ProductTitle
 
} from './ProductsElements';

const Products = ({  data }) => {
  Aos.init();
  return (
    <ProductsContainer>
     
     <ProductWrapper>
        
       
         {data.map((product, index) => {
          return (
            
            <ProductCardInfo key={index} > 
              
          
              <ProductInfo>
              <ProductPrice>{product.descrip}</ProductPrice>
               <ProductTitle>{product.name}</ProductTitle>
                 <ProductDesc>{product.desc}</ProductDesc>
                 <ProductHorario>{product.horario}</ProductHorario>
                 
                
              </ProductInfo>
            </ProductCardInfo>
          );
        })}
         {data.map((product, index) => {
          return (
            
            <ProductCard key={index} data-aos="fade-down">
              <ProductImg src={product.img} alt={product.alt} ></ProductImg>

            </ProductCard>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
