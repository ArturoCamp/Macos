import React from 'react';


import {
  OrdersContainer,
  OrdersWrapper,

  OrdersTitle,
  OrdersCard,
  OrdersImg,
  OrdersInfo,
  OrdersDesc,
  OrdersPrice,
  OrdersButton,
  OrdersCardInfo,
  OrdersHorario
 
} from './OrdersElements';

const Orders = ({ data }) => {
  return (
    <OrdersContainer>
     
      <OrdersWrapper>
        
        {data.map((product, index) => {
          return (
            
            <OrdersCard key={index}>
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
                 
                <OrdersButton data-glf-cuid="acc4654d-611b-471f-8504-f6f442c690ab" data-glf-ruid="63a71757-345b-4830-b2e0-edc6bf22f03d">
                Realizar pedido
                </OrdersButton>
              </OrdersInfo>
            </OrdersCardInfo>
          );
        })}
      </OrdersWrapper>
      
    </OrdersContainer>
  );
};

export default Orders;
