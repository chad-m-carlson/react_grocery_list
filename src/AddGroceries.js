import React from 'react';

class AddGroceries extends React.Component {
  constructor(props){
    super(props);
    this.state = { name: '', quantity: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);  
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ [e.target.name]: e.target.value})
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addGrocery(this.state.name, this.state.quantity);
    this.setState({quantity: ''});
    this.setState({name: ''});
  };
  
  render() {
    // DESTRUCTURING THE STATE OBJECT
    const { name, quantity } = this.state;
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          value={name}
          name="name"
          onChange={this.handleChange}
          required
          placeholder="Add Groceries"
          ></input>
        <input
          value={quantity}
          name="quantity"
          onChange={this.handleChange}
          required
          placeholder="Quantity"
          >
        </input>
        <button type="submit">Add To Grocery List</button>
      </form>
    );
  }
};

export default AddGroceries;