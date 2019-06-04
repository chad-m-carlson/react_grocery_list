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
      <div className="ui form">
        <form onSubmit={this.handleSubmit}>
          <input
            value={name}
            name="name"
            onChange={this.handleChange}
            required
            placeholder="Add Groceries"
            className="field"
            ></input>
          <input
            value={quantity}
            name="quantity"
            onChange={this.handleChange}
            required
            placeholder="Quantity"
            className="field"
            >
          </input>
          <button type="submit" className="ui button green inverted">Add To Grocery List</button>
        </form>
      </div>
    );
  }
};

export default AddGroceries;