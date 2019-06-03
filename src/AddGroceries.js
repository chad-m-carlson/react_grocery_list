import React from 'react';

class AddGroceries extends React.Component {
  constructor(props){
    super(props);
    this.state = { name: '' };
    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);  
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addGrocery(this.state.name);
    this.setState({name: ''});
  };

  render() {
    // DESTRUCTURING THE STATE OBJECT
    const { name } = this.state;
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          value={name}
          name="name"
          onChange={this.handleChange}
          required
          placeholder="Add Groceries"
        ></input>
      </form>
    );
  }
};

export default AddGroceries;