import React, {Component} from 'react';
import './App.css';
import List from './List';

class App extends Component {
  state = {
    groceries: [
      {id: 1, name: "Bananas", complete: false,},
      {id: 2, name: "Cottage Cheese", complete: false,},
      {id: 3, name: "Apples", complete: false,},
      {id: 4, name: "oranges", complete: true,},
    ]
  };

  // renderGroceries = () => {
  //   const { groceries, } = this.state;
  //   return groceries.map(grocery =>
  //     <li key={grocery.id}>{grocery.name}</li>)
  // };

  render(){
    // GET THE GROCERIES OBJECT FROM THE STATE
    const {groceries} = this.state
    return (
      <List name="Grocery List" groceries={groceries}></List>
      //THE NAME AND GROCEREIS ARE PROPS THAT WE ACCESS IN THE LIST.JS COMPONENT
    )
  }
}

export default App;
