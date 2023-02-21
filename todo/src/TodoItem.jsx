import { toggleTask , deleteTask} from "./actions";
import { connect } from "react-redux";
function TodoItem ({task, dispatch}){
    const handleToggle = () => {
        dispatch(toggleTask(task.id))
    }

    const handleDelete = () => {
        dispatch(deleteTask(task.id))
    }
    
    return (
        <li>
            <input type="checkbox" checked={task.completed} onChange={handleToggle} />
            <span style={{textDecoration: task.completed ? 'line-through' : 'none'}}>{task.payload}</span>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default connect()(TodoItem);