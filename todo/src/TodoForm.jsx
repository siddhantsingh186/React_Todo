import { addTask } from "./actions"
import { connect } from "react-redux"
import React, { Component } from "react"

class TodoForm extends Component{
    state = {
        inputValue: ''
    }

    handleChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(addTask(this.state.inputValue));
        this.setState({
            inputValue: ''
        })
    }


render (){
    return (
        <form onSubmit = {this.handleSubmit}>
            <input
                type = "text"
                value = {this.state.inputValue}
                onChange = {this.handleChange}
            />
            <button type = "submit">Add Task</button>
        </form>
    )
    }
}

export default connect()(TodoForm);