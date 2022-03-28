import React from 'react';

// Use a stateless functional component instead of a class

function ItemList(props) {
  
  return (
    <div className="Item-list">
      <h4 className="App-title">Here's the shopping list:</h4>
        <ol className="item-list">
          {props.items.map((item, index) => <li key={index}>{item}</li>)}
        </ol>
    </div>
  )
}

export default ItemList