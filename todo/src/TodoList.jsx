import React from 'react'
import { connect } from 'react-redux'
import TodoItem from './TodoItem'
function TodoList ({tasks}){
    return (
        <ul>
            {tasks.map((task) => (
                <TodoItem key={task.id} task={task} />
            ))}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps)(TodoList);