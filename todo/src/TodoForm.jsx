import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from './actions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch } = this.props;
    dispatch(addTask({id: Date.now(), payload: this.state.inputValue, completed: false}));
    this.setState({ inputValue: '' });
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={inputValue} onChange={this.handleInputChange} />
        <button type="submit">Add Task</button>
      </form>
    );
  }
}

export default connect()(TodoForm);
