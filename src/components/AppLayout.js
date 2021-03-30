import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Header from './Header';
import Footer from './Footer';

const Wrapper = styled.div`
  margin: 30px;
  padding: 30px;
`;

function AppLayout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>
        {children}
      </Wrapper>
      <Footer />
    </>
  )
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AppLayout;
