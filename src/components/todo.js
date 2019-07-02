import React from 'react'
import styles from '../styles.module.css'

const Todo = ({text, uid, completed, onClick, editTodo, dispatch }) => {

    console.log(dispatch)

    return (
        <li>
            <input className={styles.completeBox} onClick={onClick[0]} style={{backgroundColor: completed ? "black": "white"}}></input>
            <input type="text" defaultValue={text} onChange={(e) => {dispatch(editTodo(uid,e.target.value))}}>
            </input>
            <button onClick={onClick[1]}>Delnpete</button>
        </li>
    )
}

export default Todo 