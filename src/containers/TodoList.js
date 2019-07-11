import React from 'react'
import {connect} from 'react-redux'
//import  {bindActionCreators} from 'redux'
import Todo from '../components/todo'
import {toggleTodo} from '../actions/todo.actions'
import {deleteTodo} from '../actions/todo.actions'
import {editTodo} from '../actions/todo.actions'
import styles from '../styles.module.css'

const TodoList = ({todos,toggleTodo, deleteTodo, editTodo, filter, mode}) => {
    

    return(
        <ul className={styles.todoList}  >
            <div className={styles.gradient}></div>
            {todos.length === 0 ? <span className={styles.messageSpan}>You have no todos here</span> :
            todos.map((todo, index )=> (
             <Todo key={index} uid={todo.uid} text={todo.text} completed={todo.completed}
             editTodo={editTodo}
             toggleTodo={toggleTodo}
             onClick={() => {deleteTodo(todo.uid)}} filter={filter} mode={mode} />
            ))}
        </ul>

    )
}

const filterTodos = (todos, filter) => {
    switch(filter) {
        case "COMPLETED":
            return todos.filter(todo => todo.completed === true);
        case "ACTIVE":
            return todos.filter(todo => todo.completed === false)
    default: return todos
    }
}


const mapStateToProps = state => ({
    todos: filterTodos(state.todos, state.filter),
    filter: state.filter,
    mode: state.mode
})

const mapDispatchToProps = dispatch => ({
    deleteTodo: uid => dispatch(deleteTodo(uid)),
    toggleTodo: uid => dispatch(toggleTodo(uid)),
    editTodo: (uid,text) => dispatch(editTodo(uid,text))

})






export default connect(mapStateToProps,mapDispatchToProps)(TodoList)