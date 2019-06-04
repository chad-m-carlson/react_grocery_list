import React from 'react';
import Grocery from './Grocery';


// const List = (props) => (
//   <div>
//     <h2>{props.name}</h2>
//     <ul>
//       {props.groceries.map( grocery => <li key={grocery.id}>{grocery.name}</li>)}
//     </ul>
//   </div>
// );
//DESTRUCTURE THE PROPS, REMOVE ALL TRACES OF props. FROM HTML {}

  const List = ({groceries, name, groceryClick}) => (
    <div>
      <h2>{name}</h2>
      <ul className="ui list">
        { groceries.map( grocery => <Grocery key={grocery.id}{...grocery} groceryClick={groceryClick}/>)}
        {/* THE HARD, EASY TO READ WAY BELOW */}
        {/* { groceries.map( grocery => <Grocery key={grocery.id} id={grocery.id} name={grocery.name} purhcased={grocery.purchased})} */}
      </ul>
    </div>
  );

export default List;