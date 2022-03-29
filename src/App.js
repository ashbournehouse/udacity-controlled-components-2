import React from 'react';
import './Css/App.css';

import Header from './Components/Header.jsx';
import AddItem from './Components/AddItem.jsx';
import ItemList from './Components/ItemList.jsx';


class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  /*
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  */

  /*
  addItem = event => {
    event.preventDefault();
    this.setState(oldState => ({
      items: [...oldState.items, this.state.value],
    }));
  };
  */

  updateList = (textValue) => {
    this.setState(oldState => ({
      items: [...oldState.items, textValue],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ items: this.state.items.slice(0, -1) }));
  };

  /*
  inputIsEmpty = () => {
    return this.state.value === '';
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };
  */

  render() {
    return (
      <div className="App">
        <Header />
        <h4>List length is: {this.state.items.length}</h4>
        <AddItem
          listLength = {this.state.items.length}
          addItem = {this.addItem}
          updateList = {this.updateList}
          deleteLastItem = {this.deleteLastItem}
        />
        <ItemList items={this.state.items} />
      </div>
    );
  }
}

export default App;
