import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  list-style: none;
  display: flex;
  margin: 10px;
  padding: 10px;
`;

export const Item = styled.li`
  margin: 0px 20px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;