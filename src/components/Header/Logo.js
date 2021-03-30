import React from 'react'
import styled from 'styled-components';

import { StyledLink } from '../../utils/Menu';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Span = styled.span`
  text-align: center;
  margin: 30px 10px 10px 0;
  padding: 10px;
  width: 200px;
`;

function Logo() {
  return (
    <Wrapper>
      <Span>
        <StyledLink to='/'>
          LOGO
        </StyledLink>
      </Span>
    </Wrapper>
  )
}

export default Logo
