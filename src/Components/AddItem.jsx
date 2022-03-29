import React from 'react';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.updateList = this.props.updateList.bind(this);
    this.deleteLastItem = this.props.deleteLastItem.bind(this);
    const listLength = this.props.listLength;
    //const listLength = 0;
  };

  state = {
    textBoxValue: '',
  };

  handleChange = (event) => {
    this.setState({ textBoxValue: event.target.value });
  };
  
  addItem = (event) => {
    event.preventDefault();
    this.updateList(this.capitaliseString(this.state.textBoxValue));
    this.clearInput();
  };

  capitaliseString(value) {
    return value.charAt(0).toUpperCase() + value.toLowerCase().slice(1);
  }

  clearInput = () => {
    this.setState(() => ({ textBoxValue: '' }))
  };

    // inputIsEmpty is used to disable the addItem button
  inputIsEmpty = () => {
    return this.state.textBoxValue === '';
  };

    // noItemsFound is used to disable the removeLastItem button
  noItemsFound = (listLength) => {
    return (listLength === 0);
  };
  
  render() {
    return(
      <div className="controls" style={{backgroundColor:'#000066', padding:'0.5em'}}>
        <h2>Shopping List</h2>
        <h4>List length is: {this.props.listLength}</h4>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.textBoxValue}
          onChange={this.handleChange}
        />
        
        <button 
          onClick={this.addItem}
          disabled={this.inputIsEmpty()}>
          Add
        </button>

        <button 
          onClick={this.deleteLastItem}
          disabled={this.noItemsFound(this.props.listLength)}>
          Delete Last Item
        </button>
      </div>
    )
  }
}

export default AddItem