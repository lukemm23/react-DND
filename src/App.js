import React, { Component } from 'react';
import './App.css';
import Item from './Item';
import Target from './Target';
import Cards from './Card';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

const update = require('immutability-helper');


class App extends Component {
  state = {
    items: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
    ],
    cards: [
      {
        id: 1,
        text: 'First thing',
      },
      {
        id: 2,
        text: 'Second thing',
      },
      {
        id: 3,
        text: 'Third thing',
      },
      {
        id: 4,
        text: 'Fourth thing',
      },
      {
        id: 5,
        text:
          'Fifth thing',
      },
      {
        id: 6,
        text: 'Sixth thing',
      },
      {
        id: 7,
        text: 'Seventh thing',
      },
    ],
  }

  deleteItem = id => {
    this.setState(prevState => {
      return {
        items: prevState.items.filter(item => item.id !== id)
      }
    })
  }

  moveCard = (dragIndex, hoverIndex) => {
    const { cards } = this.state
    const dragCard = cards[dragIndex]

    this.setState(
      update(this.state, {
        cards: {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]],
        },
      }),
    )
  }
  

  render() {
    return (
      <div className="App">
        <header style={{ height: '10vh', width: '100%', paddingBottom: '1px'}} className="App-header">
          <h1 className="App-title">React Drag and Drop Samples</h1>
        </header>
        <div className="App-intro">
          <div className="app-container">
            <div className="item-container">
              {this.state.items.map((item, index) => (
                <Item key={item.id} item={item} handleDrop={(id) => this.deleteItem(id)} />
              ))}
            </div>

            <Target />
          </div>
          <div
          className="card-container" 
          >
            {this.state.cards.map((card, i) => (
              <Cards
                key={card.id}
                index={i}
                id={card.id}
                text={card.text}
                moveCard={this.moveCard}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
