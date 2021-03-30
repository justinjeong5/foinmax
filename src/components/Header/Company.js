import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { List, Item, StyledLink } from '../../utils/Menu'

function Company() {
  const categories = [
    { text: '공지/이벤트', link: 'notice' },
    { text: '추천상품', link: 'promotion' },
    { text: '매장안내', link: 'store' },
  ]
  return (
    <List>
      {categories.map((category) => (
        <Item key={uuidv4()}>
          <StyledLink to={category.link}>
            {category.text}
          </StyledLink>
        </Item>
      ))}
    </List>
  )
}

export default Company
