import React from 'react';
import { groupPatternsByBaseDirectory } from 'fast-glob/out/managers/tasks';

// const List = (props) => (
//   <div>
//     <h2>{props.name}</h2>
//     <ul>
//       {props.groceries.map( grocery => <li key={grocery.id}>{grocery.name}</li>)}
//     </ul>
//   </div>
// );
//DESTRUCTURE THE PROPS, REMOVE ALL TRACES OF props. FROM HTML {}

  const List = ({groceries, name}) => (
    <div>
      <h2>{name}</h2>
      <ul>
        {groceries.map( grocery => <li key={grocery.id}>{grocery.name}</li>)}
      </ul>
    </div>
  );

export default List;