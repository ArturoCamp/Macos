import React from 'react';
import Aos from "aos";

import {
  OrdersContainer,
  OrdersWrapper,

  OrdersTitle,
  OrdersCard,
  OrdersImg,
  OrdersInfo,
  OrdersDesc,
  OrdersPrice,

  OrdersCardInfo,
  OrdersHorario
 
} from './OrdersElements';

const Orders = ({ data }) => {
  Aos.init();
  return (
    <OrdersContainer>
     
      <OrdersWrapper>
        
        {data.map((product, index) => {
          return (
            
            <OrdersCard key={index} data-aos="fade-right">
              <OrdersImg src={product.img} alt={product.alt} ></OrdersImg>

            </OrdersCard>
          );
        })}
         {data.map((product, index) => {
          return (
            
            <OrdersCardInfo key={index}>
              
          
              <OrdersInfo>
              <OrdersPrice>{product.descrip}</OrdersPrice>
               <OrdersTitle>{product.name}</OrdersTitle>
                 <OrdersDesc>{product.desc}</OrdersDesc>
                 <OrdersHorario>{product.horario}</OrdersHorario>
                 
               
              </OrdersInfo>
            </OrdersCardInfo>
          );
        })}
      </OrdersWrapper>
      
    </OrdersContainer>
  );
};

export default Orders;
