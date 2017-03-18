import React, { Component, PropTypes } from 'react';
import cn from 'classnames';

import TodoItem from './TodoItem';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
      titleInput: '',
      titleEditing: false,
    };
  }

  onChangeTodoInput = (event) => {
    this.setState({
      todoInput: event.target.value,
    });
  }

  onChangeTitleInput = (event) => {
    this.setState({
      titleInput: event.target.value,
    });
  }

  onStartEditingTitle = () => {
    this.setState({
      titleEditing: true,
    })
  }

  handleSubmitChangeTitle = (event) => {
    const { changeTitle } = this.props;
    const { titleInput } = this.state;
    if (event.which === 13 || event.keyCode === 13) {
    // 'Enter' key pressed
      changeTitle(titleInput);
      this.setState({
        titleEditing: false,
      })
    }
    else if (event.which === 27 || event.keyCode === 27) {
    // 'ESC' key pressed
      this.setState({
        titleEditing: false,
      })
    }
  }

  handleSubmitTodo = (event) => {
    const { addTodo } = this.props;
    const { todoInput } = this.state;
    if ((event.which === 13 || event.keyCode === 13) && todoInput.trim() !== '') {
    // 'Enter' key pressed
      addTodo(todoInput);
      this.setState({
        todoInput: '',
      })
    }
  }

  renderTitle = () => {
    const { titleEditing, titleInput } = this.state;
    const { title } = this.props;
    const startEditingTitleButtonIconCN = cn(
      'glyphicon',
      'glyphicon-pencil',
    )
    if (titleEditing) {
      return (
        <div>
          <input
            value={titleInput}
            onChange={this.onChangeTitleInput}
            onKeyDown={this.handleSubmitChangeTitle}
            className="new-todo"
          />
        </div>
      );
    }
    return (
      <div>
        <spam>{title}</spam>
        <button
          className="btn btn-default btn-sm"
          onClick={this.onStartEditingTitle}
          style={{ float: 'right' }}
        >
          <span className={startEditingTitleButtonIconCN} />
        </button>
      </div>
    );
  }

  renderTodoItems = () => {
    const { todos, checkTodo, deleteTodo } = this.props;
    return (
      <ul>
        {todos.map((todo, idx) => (
          <TodoItem
            done={todo.done}
            content={todo.content}
            onCheck={() => checkTodo(idx)}
            onDelete={() => deleteTodo(idx)}
          />
        ))}
      </ul>
    );
  }

  renderNewTodoInputBlock = () => {
    const { todoInput } = this.state;
    return (
      <div>
        <input
          value={todoInput}
          onChange={this.onChangeTodoInput}
          onKeyDown={this.handleSubmitTodo}
          className="new-todo"
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderTitle()}
        {this.renderTodoItems()}
        {this.renderNewTodoInputBlock()}
      </div>
    );
  }
}

TodoList.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  })).isRequired,
  addTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  checkTodo: PropTypes.func.isRequired,
  changeTitle: PropTypes.func.isRequired,
};

export default TodoList;
