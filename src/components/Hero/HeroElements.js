import styled, {
  keyframes
} from 'styled-components';

import ImgBg from '../../images/Portada.jpg';

export const HeroContainer = styled.div `
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${ImgBg});
    align-items: center;
  height: 80vh;
  background-position: center;
  background-size: cover;
  filter: saturate(110%);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  color: #fff;
  
`;


export const HeroContent = styled.div `
  height: calc(80vh - 80px);
 
  max-height: 80%;
  min-height: 70%;
 
  display: flex;
  flex-direction: row;
  
  flex-basis: 280px;
  justify-content: center;
  text-align: center;
  
`;
export const HeroButton = styled.div `



  display: flex;
  flex-basis: 280px;
  justify-content: center;
  text-align: center;
  
`;
export const HeroItems = styled.div `
opacity:1;
background: rgb(0,0,0,0.5);
flex-direction: column;
border-radius: 20px;
height: 300px;
width: 500px;
min-width: 325px;
max-width: 85%;
flex-basis: 280px;
padding: 2rem;
position:absolute;
color: #FFF;

justify-content: center;
align-items: center;
margin-top: 20px;
display: flex;
  flex-wrap: wrap;
`;

export const HeroItems2 = styled.div `
opacity:1;
background: rgb(0,0,0,0.6);
flex-direction: center;
border-width: 1px;
  border-style: solid;
  border-color: #fff;
border-radius: 20px;
height: 250px;
width: 450px;
min-width: 250px;
max-width: 90%;
padding: 2rem;
position:absolute;
color: #FFF;
flex-basis: 280px;
justify-content: center;
align-items: center;

`;
const textAnimation = keyframes `
  0%{opacity: 0; transform: translate(5%, 10%);}

  100%{opacity: 1;}
`;
export const HeroH1 = styled.h1 `
  
  font-size: clamp(2.5rem, 2vw, 3rem);
  background: #fdc830;
  background: -webkit-linear-gradient(to right, #fdc830, #f37335); 
  background: linear-gradient(to right, #E2B129F3, #f37335); 
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 3px;
  animation-name: ${textAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;
export const HeroH2 = styled.h1 `
  
  font-size: clamp(2.5rem, 2vw, 3rem);
  
  
  letter-spacing: 3px;
  animation-name: ${textAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;
const show = keyframes `
  0%{opacity: 0;}
  25%{opacity: 1;}
  75%{opacity: 1;}
  100%{opacity: 1;}
`;
export const HeroP = styled.p `
  display: inline-block;
  opacity: 0;
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  animation-name: ${show};
  animation-duration: 15s;
  animation-fill-mode: forwards;
  
`;

export const HeroBtn = styled.button `
opacity:1;
  font-size: 1.4rem;
  padding: 1rem 1rem;
  border: none;
  background: #076B1D;
  color: #fff;
  position:relative;

  border-radius: 20px;
  
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
    
  }
`;