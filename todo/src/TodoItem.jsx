import { deleteTask, toggleTask} from "./actions";
import { connect } from "react-redux";
import React, { Component } from "react";

class TodoItem extends Component {
    handleDelete = () => {
        this.props.dispatch(deleteTask(this.props.task.id));
    };

    handleToggle = () => {
        this.props.dispatch(toggleTask(this.props.task.id));
    };

    render(){
        return (
            <li>
                <input
                    type = "checkbox"
                    checked = {this.props.task.completed}
                    onChange = {this.handleToggle}
                />
                <span style  = {{textDecoration: this.props.task.completed ? 'line-through' : 'none'}}>{this.props.task.payload}
                </span>
                <button onClick = {this.handleDelete}>Delete</button>
            </li>
        )
    }
}

export default connect()(TodoItem);