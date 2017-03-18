import React, { Component, PropTypes } from 'react';
import cn from 'classnames';

class TodoItem extends Component {

  render() {
    const { content, done, onDelete, onCheck } = this.props;
    const checkBoxCN = cn(
      'glyphicon',
      {'glyphicon-unchecked': !done, 'glyphicon-check': done },
    );
    const deleteButtonCN = cn('glyphicon', 'glyphicon-remove');
    return (
      <div style={{ width: 'auto' }}>
        <button className="btn btn-default btn-sm" onClick={onCheck}>
          <span className={checkBoxCN} />
        </button>
        <span>{content}</span>
        <button
          className="btn btn-default btn-sm"
          onClick={onCheck}
          style={{ float: 'right' }}
        >
          <span className={deleteButtonCN} />
        </button>
      </div>
    );
  }
}

TodoItem.propTypes = {
  content: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};

export default TodoItem;
