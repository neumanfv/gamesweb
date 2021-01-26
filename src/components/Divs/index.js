import React from 'react';
import {BigCard, RightCards, TopContainer, RightContainer, InnerRightContainer, Container, BottomContainer, BottomCards, Title, FullContainer, BoxText, BoxItem, ButtonAdd, HeaderAdd} from './styles';
import config from '../../config';
import { VideoCardList } from '../Carousel/styles';

function getYouTubeId(youtubeURL) {
    return youtubeURL
      .replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
      );
  }

  function Divs({ games, titulo, cor, category}){
   
    //const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
    
   
   return(
   
   <>
    
    
    
        
        <TopContainer>

           <HeaderAdd>
                    <Title style={{ backgroundColor:  'transparent' }}  >
                    
                        
                     {titulo} 
                    
                    </Title>

                    <ButtonAdd   href= {`${config.URL_SERVER}/tela/categoria/${category}`} target= "_blank" >+</ButtonAdd>
            </HeaderAdd>
            <FullContainer>
                
                <RightContainer>
                    <InnerRightContainer>
                  
                            <RightCards
                                url=  {  games[1].thumbnail}   
                                href=  {`${config.URL_SERVER}/tela/video/${games[1].id}`}  
                                target="_blank"
                                style={{ borderColor: `${cor}` }}
                                title=  {games[1].titulo} 
                            
                            >
                                    <BoxText  href={`${config.URL_SERVER}/tela/video/${games[1].id}`}  target="_blank" title={games[1].titulo} >
                                        {games[1].titulo}
                                    </BoxText>
                            </RightCards>
                  
                    <RightCards
                        url=  { games[2].thumbnail}  
                        href=  {`${config.URL_SERVER}/tela/video/${games[2].id}`}  
                        target="_blank"
                        style={{ borderColor: `${cor}` }}
                        title=  {games[2].titulo} 
                    
                    >
                      <BoxText  href={`${config.URL_SERVER}/tela/video/${games[2].id}`}  target="_blank" title={games[2].titulo} >
                                        {games[2].titulo}
                                    </BoxText>  
                    </RightCards>
                    </InnerRightContainer>
                    <InnerRightContainer>
                    <RightCards
                        url=  {  games[3].thumbnail} 
                        href=  {`${config.URL_SERVER}/tela/video/${games[3].id}`}  
                        target="_blank"
                        style={{ borderColor: `${cor}` }}
                        title=  {games[3].titulo} 
                    
                    >
                        <BoxText  href={`${config.URL_SERVER}/tela/video/${games[3].id}`}  target="_blank" title={games[3].titulo} >
                                        {games[3].titulo}
                                    </BoxText>
                    </RightCards>
                    <RightCards
                    url=  {games[4].thumbnail}   
                    href=  {`${config.URL_SERVER}/tela/video/${games[4].id}`}  
                    target="_blank"
                    style={{ borderColor: `${cor}`}}
                    title=  {games[4].titulo} 
                    
                    >
                        <BoxText  href={`${config.URL_SERVER}/tela/video/${games[4].id}`}  target="_blank" title={games[4].titulo} >
                                        {games[4].titulo}
                                    </BoxText>
                    </RightCards>
                    </InnerRightContainer>
                </RightContainer>
            </FullContainer>
        </TopContainer>



       

        


   
    </>
   )

}

export default Divs;

