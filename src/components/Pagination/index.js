import React, { useState, useEffect, useCallback } from "react";


//import api from "../../services/api";

import {
  Container,
  PTable,
  Paginationcontainer,
  PaginationButton,
  PaginationItem,
} from "./styles";

function Pagination({pages,currentPage, setCurrentPage, total}) {
  
  
 

  return (
    
      <Container>  
      <Paginationcontainer >
       
        <PaginationButton>
          {currentPage > 1 && (
            <PaginationItem onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </PaginationItem>
          )}
          {pages.map((page) => (
            <PaginationItem
              isSelect={page === currentPage}
              key={page}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </PaginationItem>
          ))}
          {currentPage < pages.length && (
            <PaginationItem onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </PaginationItem>
          )}
        </PaginationButton>
      </Paginationcontainer>
      </Container>  
  );
}

export default Pagination;
