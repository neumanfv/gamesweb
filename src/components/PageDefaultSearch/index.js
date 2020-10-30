
import React from 'react';
import MenuSearch from '../MenuSearch';

import Footer from '../Footer';
import styled, {css} from 'styled-components';

const Main = styled.main`
  background-color: #FB3532;
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
  ${({paddingAll}) => css `
  padding:${paddingAll};
  `}
`;


function PageDefaultSearch({children, paddingAll }) {
  return (
    <>
     
      
     <MenuSearch/>
        <Main paddingAll={paddingAll}>
          {children}
        </Main>
      <Footer />
    </>
  );
}

export default PageDefaultSearch;