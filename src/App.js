import React, { Component } from 'react';

import TodoList from './TodoList';
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
          title: 'sample todo list 2',
          todos: [
            { content: 'XXXXX', done: false },
            { content: 'YYYY', done: false },
          ],
        },
      ],
    };
  }

  changeTitle = (idx) => {
    const { todoLists } = this.state;
    return newTitle => {
      const newTodoLists = todoLists.slice();
      newTodoLists[idx].title = newTitle;
      this.setState({
        todoLists: newTodoLists,
      })
    }
  }

  addTodo = (idx) => {
    const { todoLists } = this.state;
    return newTodo => {
      const newTodoLists = todoLists.slice();
      newTodoLists[idx].todos = [
        ...newTodoLists[idx].todos,
        { content: newTodo, done: false },
      ];
      this.setState({
        todoLists: newTodoLists,
      })
    }
  }

  deleteTodo = (idx) => {
    const { todoLists } = this.state;
    return idxOfTodo => {
      const newTodoLists = todoLists.slice();
      newTodoLists[idx].todos.splice(idxOfTodo, 1)
      this.setState({
        todoLists: newTodoLists,
      })
    }
  }

  renderTodoLists = () => {
    const { todoLists } = this.state;
    return (
      <div className="container">
        <div className="row">
          {todoLists.map((todoList, idx) => (
            <div className="col col-md-3">
              <TodoList
                title={todoList.title}
                todos={todoList.todos}
                addTodo={this.addTodo(idx)}
                deleteTodo={this.deleteTodo(idx)}
                checkTodo={() => {}}
                changeTitle={this.changeTitle(idx)}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1 className="App">Todo Lists</h1>
        {this.renderTodoLists()}
      </div>
    );
  }
}

export default App;
