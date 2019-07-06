import React from 'react'
import styles from '../styles.module.css'

const Todo = ({text, uid, completed, onClick, toggleTodo, editTodo }) => {

    console.log(uid)
    return (
        <li >
            <button uid={uid} className={!completed ? styles.checkBox : styles.checkBoxCompleted} onClick={()=>{toggleTodo(uid)}} ></button>
            <textarea maxLength="35" rows="2" cols="50" className={styles.todo}  value={text} onChange={(e) => {editTodo(uid,e.target.value)}}>
            </textarea>
            <button className={styles.deleteButton} onClick={onClick}>X</button>
        </li>
    )
}

export default Todo 