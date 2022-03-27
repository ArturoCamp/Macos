import React, { useEffect } from 'react';
import Aos from "aos";
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  useEffect(() => {
    Aos.init({duration: 2000});
    
  },[] );
  return (
    <FeatureContainer data-aos="fade-up">
     
    </FeatureContainer>
  );
};

export default Feature;
