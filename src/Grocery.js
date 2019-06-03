import React from 'react';

const Grocery = ({id, name, purchased, groceryClick}) => (
  <li
  style={ purchased ? { ...styles.todo, ...styles.complete } : styles.todo}
  onClick={ () => groceryClick(id) }
  >
    {name}
  </li>
);

const styles = {
  todo: {cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through'},
};

export default Grocery;