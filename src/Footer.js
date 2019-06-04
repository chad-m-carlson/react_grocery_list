import React from 'react';

const styles = {
  link: {
    cursor: 'pointer',
    textDecoration: 'underline',
    color: 'blue',
    marginLeft: '5px',
    marginRight: '5px',
  }
};

const filterLink = (current, name, setFilter, index) => {
  if (current === name)
    return <span key={index} >{name}</span>
  else
    return <span key={index} style={styles.link} onClick={() => setFilter(name) }>{name}</span>
};

const Footer = ({ filter, setFilter }) => (
  <div>
    { ['All', 'Active', 'Purchased'].map( (f, index) => filterLink( filter, f, setFilter, index))}
  </div>
)

export default Footer;