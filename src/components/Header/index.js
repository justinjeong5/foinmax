import React from 'react';
import styled from 'styled-components';

import Products from './Products';
import Company from './Company';
import Logo from './Logo';

const Wrapper = styled.div`
  margin: 30px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

function Header() {
  return (
    <>
      <Logo />
      <Wrapper>
        <Products />
        <Company />
      </Wrapper>
    </>
  )
}

export default Header
