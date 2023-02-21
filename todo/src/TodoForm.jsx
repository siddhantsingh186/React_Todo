import React, {useState} from 'react';
import { connect } from 'react-redux';
import { addTask } from './actions';

function TodoForm({dispatch}){
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTask({id: Date.now(), payload: inputValue, completed: false}))
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
            <button type="submit">Add Task</button>
        </form>
    )
}

export default connect()(TodoForm);