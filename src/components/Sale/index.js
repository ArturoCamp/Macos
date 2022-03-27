import React from 'react';
import { FeatureContainer,OrdersText  } from './SaleElements';

const Feature =  ({ heading}) => {
  return (
    
    <FeatureContainer>
      
      <h1>Puntos de venta</h1>
      <OrdersText>Minisuper y licorera Pelón -Calle el pastor</OrdersText>
      <OrdersText>Minisuper Recope -Barrio Recope</OrdersText>
      <OrdersText>Abastecedor Zuñiga -Barrio Recope</OrdersText>
      <OrdersText>Abastecedor Los Castillos -Cedros</OrdersText>
      <OrdersText>Abastecedor Cheverría -Cedros</OrdersText>
      <OrdersText>Abastecedor La Violeta -Repasto</OrdersText>
      <OrdersText>Licorera La 18 -Barrio Don Tomas</OrdersText>
      <OrdersText>Abastecedor Botecito -Barrio Botecito</OrdersText>
      <OrdersText>Heladería Los Once -Centro comercial Rojas Cortez</OrdersText>
      <OrdersText>Mercadito Pacuare -Transtusa</OrdersText>
      <OrdersText>Super Tony -Transtusa</OrdersText> 
    </FeatureContainer>
  );
};

export default Feature;
