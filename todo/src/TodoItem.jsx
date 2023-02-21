import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTask, deleteTask } from './actions';

class TodoItem extends Component {
  handleToggle = () => {
    const { dispatch, task } = this.props;
    dispatch(toggleTask(task.id));
  };

  handleDelete = () => {
    const { dispatch, task } = this.props;
    dispatch(deleteTask(task.id));
  };

  render() {
    const { task } = this.props;

    return (
      <li>
        <input type="checkbox" checked={task.completed} onChange={this.handleToggle} />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.payload}</span>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}

export default connect()(TodoItem);
