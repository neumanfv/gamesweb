import React from 'react';
import { FooterBase, SocialImage, InternalBox, SocialLink, ParentBox, TermsLink } from './styles';

import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';
import youtube from '../../assets/img/youtube.png';
import twitch from '../../assets/img/twitch.png';
import gingo from '../../assets/img/gingoplay.png';
import toplives from '../../assets/img/topgameslives.png';

function Footer() {
  return (
    <FooterBase>
      
      <ParentBox>
            <InternalBox>
                  
                 <SocialLink href="https://www.youtube.com/channel/UCbkVwb5cnPrlybJ9AxHfqRA" target="_blank">
                    <SocialImage src={youtube} alt="Facebook" />
                  </SocialLink>
                  <SocialLink href="https://topgameslives.com/" target="_blank" >
                    <SocialImage src={toplives} alt="Facebook" />
                  </SocialLink>
                  <SocialLink href="https://www.instagram.com/" target="_blank">
                    <SocialImage src={instagram} alt="Facebook" />
                  </SocialLink>
                 
                  <SocialLink href="https://www.twitch.tv/"  target="_blank">
                      < SocialImage src={twitch} alt="Facebook" />
                  </SocialLink>
            </InternalBox>
            <InternalBox>
                
                <TermsLink href="/privacy">
                  Privacy Policy
                </TermsLink>

                <TermsLink href="/terms">
                 Terms of Service
                </TermsLink>
            </InternalBox>
      </ParentBox>
      <p>
      Copyright © 2021 - Gingo Play – Free Games Online!
      </p>
    </FooterBase>
  );
}

export default Footer;
