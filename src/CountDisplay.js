import React, { Component, PropTypes } from 'react';

class CountDisplay extends Component {
  render() {
    const { todos } = this.props;
    const doneTodoNum = todos.filter(todo => todo.done).length;
    const notDoneTodoNum = todos.filter(todo => !todo.done).length;
    return (
      <div>
        <h3>{`todos done: ${doneTodoNum}`}</h3>
        <h3>{`todos remain: ${notDoneTodoNum}`}</h3>
      </div>
    );
  }
}

CountDisplay.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    done: PropTypes.bool.isRequired,
  })).isRequired,
};

export default CountDisplay;
