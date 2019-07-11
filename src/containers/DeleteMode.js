import React from 'react'
import {connect} from 'react-redux'
import {updateMode} from '../actions/todo.actions'
import styles from '../styles.module.css'

const DeleteMode = ({dispatch, mode, todos}) => {

    return (
        <button 
            className={`${styles.deleteMode} ${todos.length === 0 ? styles.hide: styles.show}`} 
            onClick={(e)=> {dispatch(updateMode(mode === "Delete" ? "Create" : "Delete"))}}>
        DELETE TODOS</button>
    )
}

const mapStateToProps = state => ({
    mode: state.mode,
    todos: state.todos
})

export default connect(mapStateToProps)(DeleteMode)