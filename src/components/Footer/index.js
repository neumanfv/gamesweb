import React from 'react';
import { FooterBase, SocialImage, InternalBox, SocialLink, ParentBox, TermsLink } from './styles';

import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';
import youtube from '../../assets/img/youtube.png';
import twitch from '../../assets/img/twitch.png';

function Footer() {
  return (
    <FooterBase>
      
      <ParentBox>
            <InternalBox>
                  <SocialLink href="https://www.facebook.com/" target="_blank">
                    <SocialImage src={facebook} alt="Facebook" />
                  </SocialLink>
                  <SocialLink href="https://www.instagram.com/" target="_blank">
                    <SocialImage src={instagram} alt="Facebook" />
                  </SocialLink>
                  <SocialLink href="https://www.youtube.com/" target="_blank">
                    <SocialImage src={youtube} alt="Facebook" />
                  </SocialLink>
                  <SocialLink href="https://www.twitch.tv/"  target="_blank">
                  < SocialImage src={twitch} alt="Facebook" />
                  </SocialLink>
            </InternalBox>
            <InternalBox>
                
                <TermsLink href="/">
                  Privacy Policy
                </TermsLink>

                <TermsLink href="/">
                Contact
                </TermsLink>
            </InternalBox>
      </ParentBox>
      <p>
      Copyright © 2020 - Jogos Online Gratuitos – Free Games Online!
      </p>
    </FooterBase>
  );
}

export default Footer;
