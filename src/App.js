import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoLists: [
        {
          title: 'sample todo list 1',
          todos: [
            { content: 'todo 1-1', done: true },
            { content: 'todo 1-2', done: false },
            { content: 'todo 1-3', done: true },
          ],
        },
        {
          title: 'sample todo list 1',
          todos: [
            { content: 'todo 1-1', done: true },
            { content: 'todo 1-2', done: false },
            { content: 'todo 1-3', done: true },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1 className="App">Todo Lists</h1>
      </div>
    );
  }
}

export default App;
