import React from 'react';
import PageDefaultSearch from '../../components/PageDefaultSearch';
import PageDefault from '../../components/PageDefault';
import SearchBox from '../../components/SearchBox';
import BannerAdd from '../../components/BannerAdd';

function SearchPage() {
  
  
  return (
    <PageDefault paddingAll={0}>
      
      <SearchBox/>

      <BannerAdd/>
    </PageDefault>
  );

}

export default SearchPage;