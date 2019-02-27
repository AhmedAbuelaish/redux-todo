import React, {Component} from 'react'
import {connect} from 'react-redux'

class TodoAppContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {value: ''}
    }

    handleFormChange = (e) => {
        this.setState({value: e.target.value})
    }

    handleFormSubmission = (e) => {
        e.preventDefault()
        this.props.addTodo(this.state.value)
        this.state.value = ''
    }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>{this.handleFormSubmission(e)}}>
                    <input type="text" value={this.state.value} onChange={(e)=>this.handleFormChange(e)}/>
                    <input type="submit" value="+" disabled={!this.state.value}/>
                </form>
                
                {this.props.todos.map((todoItem, i) => {
                    const styles = {
                        textDecoration: `${todoItem.done ? 'line-through' : 'none'}`,
                        color: `${todoItem.done ? 'grey' : 'white'}`
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