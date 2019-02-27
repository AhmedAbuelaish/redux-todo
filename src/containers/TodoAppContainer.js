import React, {Component} from 'react'
import {connect} from 'react-redux'

class TodoAppContainer extends Component {

    addTodo () {
        this.props.addTodo('homework')
    }

    render() {
        // console.log('props',this.props)
        console.log('todos',this.props.todos)
        console.log('addtodo', this.addTodo)
        return (
            <div>
                This is the todo app
                <button onClick={()=>this.addTodo()}>Add Todo</button>
                {this.props.todos.map((todoItem, i) => {
                    const styles = {
                        textDecoration: `${todoItem.done ? 'line-through' : 'none'}`
                    }
                    return <p style={styles} key={i} onClick={()=>this.props.toggleDone(i)}>{todoItem.task}</p>
                })}
            </div>
        )
    }
}


// If you mutate state, these functions do not get called. Do not mutate
const mapStateToProps = (state) => ({
    // todos is a prop, equivalent to <TodoAppContainer todos="..." />
    todos: state.todos
})

const mapDispatchToProps = (dispatch) => ({
    // equivalent to <TodoAppContainer addTodo={(todoText) => dispatch({type: 'ADD_TODO', text: todoText})} />
    addTodo: (todoText) => dispatch({type: 'ADD_TODO', text: todoText}),
    toggleDone: (todoIndex) => dispatch({type: 'TOGGLE_DONE', index: todoIndex})
})

// The connect function allows the container to reference the store created by Provider
export default connect(mapStateToProps, mapDispatchToProps)(TodoAppContainer)