import React from 'react';

const Grocery = ({id, name, purchased, quantity, groceryClick, deleteGrocery}) => (
  <li
  className="ui list item"
  style={ purchased ? { ...styles.todo, ...styles.complete } : styles.todo}
  onClick={ () => groceryClick(id) }>
    {quantity}) {name} 
  <p
  style={ styles.delete}
  onClick={ () => deleteGrocery(id) }>
    Delete?
  </p>
  </li>
);

const styles = {
  todo: {cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through'},
  delete: {color: 'blue', textDecoration: 'underline', fontSize: '8px'}
};

export default Grocery;