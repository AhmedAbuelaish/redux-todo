const initialState = {
    todos: [
        {
        task: 'homework',
        done: false
        }
    ]
}

const todoReducer = (state = initialState, action) => {
    const newTodos = state.todos.slice()
    switch (action.type) {
        case 'ADD_TODO':
            newTodos.push({task: action.text, done: false})
            return {
                todos: newTodos
            }
        case 'TOGGLE_DONE':
            newTodos[action.index].done = !newTodos[action.index].done
            return {
                todos: newTodos
            }
        default:
            return state
    }
}

export default todoReducer