export const addTask = (task) => {
    return {
        type: 'ADD_TASK',
        payload: task
    }
}

export const deleteTask = (task, id) => {
    return {
        type: 'DELETE_TASK',
        payload: id
    }
}

export const toggleTask = (task, id) => {
    return {
        type: 'TOGGLE_TASK',
        payload: id
    }
}
