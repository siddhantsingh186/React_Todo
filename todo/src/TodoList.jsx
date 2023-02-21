import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const { tasks } = this.props;
    return (
      <ul>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  };
};

export default connect(mapStateToProps)(TodoList);
