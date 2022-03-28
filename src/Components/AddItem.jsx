import React from 'react';

class AddItem extends React.Component {
  constructor(props) {
    super(props);
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };
  
  addItem = (event) => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };
  
  deleteLastItem = (event) => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };
  
  render() {
    return(
      <div className="controls" style={{backgroundColor:'#000066', padding:'0.5em'}}>
        <h2>Shopping List</h2>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.handleChange}
        />
        
        <button 
          onClick={this.addItem}
          disabled={this.inputIsEmpty()}>
          Add
        </button>

        <button 
          onClick={this.deleteLastItem}
          disabled={this.noItemsFound()}>
          Delete Last Item
        </button>
      </div>
    )
  }
}

export default AddItem