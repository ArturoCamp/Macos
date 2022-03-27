import styled, {
  keyframes
} from 'styled-components';


export const ProductsContainer = styled.div `
  /* width: 100vw; */
  min-height: 78vh;
  padding: 1rem calc((100vw - 1200px) / 2);
  background: #fff;
 
  color: #000;
  background: #7E887E;
  background: -webkit-linear-gradient(to right, #61696100, #FFFFFF00);
  background: linear-gradient(to right, #B8BEB82F, #B8BEB82F);
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
 
  justify-content: center;
 gap:20px;

`;

export const ProductCard = styled.div`

margin: 0 6rem;
line-height: 2;
width: 315px;
justify-content: center;
flex-basis: 280px;

`;
export const ProductCardInfo = styled.div`
margin: 0 5rem;
  line-height: 2;
  width: 400px;
  
  flex-basis: 280px;
  
`;

export const ProductImg = styled.img`
  height: 325px;
  min-width: 325px;
  max-width: 100%;
 
  border-radius: 20px;
  &:hover {
    filter: saturate(130%);
    transition: 0.2s ease-out;
    cursor: pointer;
    -webkit-transform:scale(1.05);transform:scale(1.05);
  }
`;



export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 350px;
  max-width: 100%;
  padding: 0.5rem;
  
  color: #050505;
`;

export const ProductDesc = styled.p`
  margin-bottom: 1rem;
  color: #050505;
  text-align: init;
  font-size: 0.9rem;
  font-weight: 600;
 
`;
export const ProductHorario = styled.p`
  margin-bottom: 2rem;
  color: #050505;
  text-align: init;
  font-size: 0.9rem;
  font-weight: 600;
 
`;

export const ProductTitle = styled.h2`
  font-weight: 800;
  font-size: 1.5rem;
  color: #000;
 
  float: left;
`;

export const ProductPrice = styled.p`
 
  font-size: 0.8rem;
  color: #6D6565;
  text-align: left;
`;

export const ProductButton = styled.button`
font-size: 1.2rem;
padding: 1rem 4rem;
border: none;
background: #FC2424;
color: #fff;
border-radius: 20px;
Text-aling: absolute;
  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
