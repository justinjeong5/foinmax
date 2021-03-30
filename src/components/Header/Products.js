import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { List, Item, StyledLink } from '../../utils/Menu'

function Products() {
  const categories = [
    { text: '침실', link: 'room' },
    { text: '거실', link: 'livingRoom' },
    { text: '부엌', link: 'kitchen' },
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

export default Products
