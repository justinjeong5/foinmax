import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 60px;
`;
const Content = styled.p`
  font-size: 14px;
  font-weight: 300;
  color: #777;
  line-height: 30px;
`;

function Footer() {
  return (
    <Wrapper>
      <Content>
        대표자 : 정창우 | 주소 : 강원 춘천시 세실로 100-21 롯데마트 가구백화점
      </Content>
      <Content>
        COPYRIGHT (C) ACE BED CORPORATION ALL RIGHTS RESERVED
      </Content>
    </Wrapper>
  )
}

export default Footer
