import React from 'react';
import Banner from '../../assets/img/BannerG2A.jpg';
import {Imagem, Link, Section} from './styles';

function BannerAdd (){
    return(
        <Section>
        <Link href="https://www.g2a.com/n/reflink-f81cbeaa42" target="_blank"><Imagem src={Banner} alt="Banner"/></Link>
        </Section>
    );

}



export default BannerAdd;