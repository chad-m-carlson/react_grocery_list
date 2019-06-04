import React, {Component} from 'react';
import './App.css';
import List from './List';
import AddGroceries from './AddGroceries'
import Footer from './Footer'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groceries: [
        {id: 1, name: "Bananas", quantity: 6, purchased: false,},
        {id: 2, name: "Cottage Cheese", quantity: 1, purchased: false,},
        {id: 3, name: "Apples", quantity: 6, purchased: false,},
        {id: 4, name: "oranges", quantity: 6, purchased: true,},
      ],
      filter: "All",
    };

    
    this.addGrocery = this.addGrocery.bind(this);
  };
  
  setFilter = (filter) => {
    this.setState({filter})
  };

  // renderGroceries = () => {
  //   const { groceries, } = this.state;
  //   return groceries.map(grocery =>
  //     <li key={grocery.id}>{grocery.name}</li>)
  // };

  getID = () => {
    return Math.floor((1 + Math.random()) *0X10000)
      .toString(16)
      .substring(1);
  };

  addGrocery(name, quantity) {
    const { groceries } = this.state;
    const grocery = {name, id:this.getID(), quantity, purchased: false};
    this.setState({ groceries: [grocery, ...groceries]});
  }

  groceryClick = (id) => {
    const {groceries} = this.state;
    this.setState({
      groceries: groceries.map(grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
            purchased: !grocery.purchased
          }
        }
        return grocery
      })
    })
  }

  visibleItems = () => {
    const {groceries, filter } = this.state;
    switch(filter) {
      case 'Active':
        return groceries.filter( g => !g.purchased)
      case 'Purchased':
        return groceries.filter( t => t.purchased)
      default:
        return groceries;
    }
  }

  render(){
    // GET THE GROCERIES OBJECT FROM THE STATE
    const {filter} = this.state


    return (
      <div>
        <List name="Grocery List" groceries={this.visibleItems()} groceryClick={this.groceryClick}></List>
        {/* THE NAME AND GROCEREIS ARE PROPS THAT WE ACCESS IN THE LIST.JS COMPONENT */}
        <AddGroceries addGrocery = {this.addGrocery} />
        <Footer filter={filter} setFilter={this.setFilter} />
      </div>
    )
  }
}

export default App;
