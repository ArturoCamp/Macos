import React from 'react';

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink
} from './FooterElements';

const Footer = () => {
  
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo >Maco´s Salsas y aderezos</SocialLogo>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/Macos-Salsas-y-aderezos-100394028982911' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/macossalsas/?hl=es' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              
              <SocialIconLink
                href='https://api.whatsapp.com/send?phone=50685595239'
                target='_blank'
                aria-label='Whatsapp'
               
              >
                <FaWhatsapp />
              </SocialIconLink>
             
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
