import React from 'react';

const Grocery = ({id, name, purchased, quantity, groceryClick}) => (
  <li
  className="ui list item"
  style={ purchased ? { ...styles.todo, ...styles.complete } : styles.todo}
  onClick={ () => groceryClick(id) }
  >{quantity}) {name}
  </li>
);

const styles = {
  todo: {cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through'},
};

export default Grocery;