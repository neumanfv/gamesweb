import styled from 'styled-components';

const Button = styled.button`
    color: var(--white);
    border: 1px solid var(--white);
    background: #009FE3;
    box-sizing: border-box;
    cursor: pointer;
    padding: 3px 3px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
    opacity: .9;
  }


`;

export default Button; 