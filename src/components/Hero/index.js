import React from 'react';


import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroItems2,
  HeroH1,
  HeroH2,
  HeroP,
  HeroBtn,
  HeroButton
} from './HeroElements';

const Hero = () => {
  
  

 

  return (
    <HeroContainer>
    
  
      <HeroContent>
        <HeroItems>
          <HeroItems2>
          <HeroH1>Maco´s </HeroH1>
          <HeroH2>Salsas y aderezos</HeroH2>
          <HeroP>by Turrialba</HeroP>
          
         
          </HeroItems2>
         
       
        </HeroItems>
 
      </HeroContent>
      <HeroButton>
        <HeroBtn data-glf-cuid="acc4654d-611b-471f-8504-f6f442c690ab" data-glf-ruid="63a71757-345b-4830-b2e0-edc6bf22f03d">
            Realizar Pedido
        </HeroBtn>
        </HeroButton>
    </HeroContainer>
  );
};

export default Hero;
