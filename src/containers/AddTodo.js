import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions/todo.actions'
import styles from '../styles.module.css'

const AddTodo = ({dispatch}) => {
    let input
    const handleSubmit = (e) => {
        e.preventDefault()
        if(input.value.trim() !== ""){
        dispatch(addTodo(input.value.trim()))
        }
        input.value = ""
    }

    return(
        <form onSubmit={(e) => {handleSubmit(e)}}>
            <input className={styles.todoInput} ref={node => (input = node)} type="text" placeholder="..."></input>
            <input type="image" value="+" src="./add-icon.png" className={styles.todoSubmit} alt="Add sign"></input>
        </form>
    )
}



export default connect()(AddTodo)