import styled from "styled-components";

export const Container = styled.div`
   margin-bottom:20px;
  

`;



export const Paginationcontainer = styled.div`
  display: flex;
  min-width: 450px;
  max-width: 100%;
  justify-content: center;
  margin-top: 10px;
  
  
`;

export const PaginationButton = styled.div`
  display: flex;
 
`;

export const PaginationItem = styled.div`
  margin: 0 10px;
  cursor: pointer;
  color:" #42413C";

  ${(props) =>
    props.isSelect && {
      background: "#009FE3",
      padding: "0 5px",
      color:" #42413C",
    }}
`;
