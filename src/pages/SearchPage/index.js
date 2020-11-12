import React from 'react';
import PageDefaultSearch from '../../components/PageDefaultSearch';
import SearchBox from '../../components/SearchBox';
import BannerAdd from '../../components/BannerAdd';

function SearchPage() {
  
  
  return (
    <PageDefaultSearch paddingAll={0}>
      
      <SearchBox/>

      <BannerAdd/>
    </PageDefaultSearch>
  );

}

export default SearchPage;