import React from 'react'
import {connect} from 'react-redux'
//import  {bindActionCreators} from 'redux'
import Todo from '../components/Todo'
import {toggleTodo} from '../actions/todo.actions'
import {deleteTodo} from '../actions/todo.actions'
import {editTodo} from '../actions/todo.actions'
import styles from '../styles.module.css'

const TodoList = ({todos,toggleTodo, deleteTodo, editTodo}) => {
    return(
        <ul className={styles.todoList}>
            {todos.map((todo, index )=> (
             <Todo key={index} uid={todo.uid} text={todo.text} completed={todo.completed}
             editTodo={editTodo}
             toggleTodo={toggleTodo}
             onClick={() => {deleteTodo(todo.uid)}}  />
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
    todos: filterTodos(state.todos, state.filter)
})

const mapDispatchToProps = dispatch => ({
    deleteTodo: uid => dispatch(deleteTodo(uid)),
    toggleTodo: uid => dispatch(toggleTodo(uid)),
    editTodo: (uid,text) => dispatch(editTodo(uid,text))

})






export default connect(mapStateToProps,mapDispatchToProps)(TodoList)