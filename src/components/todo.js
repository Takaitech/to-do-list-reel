import React from 'react'
import styles from '../styles.module.css'

const Todo = ({text, uid, completed, onClick, toggleTodo, editTodo, filter}) => {

    console.log(filter)
    return (
        <li >
            <div className={styles.connectorRight}></div>
            <button className={styles.deleteButton} onClick={onClick}></button>
            <div className={styles.todo}>
                <textarea className={styles.todoText}maxLength="35" rows="2" cols="50"  value={text} onChange={(e) => {editTodo(uid,e.target.value)}}>
                </textarea>
            <button uid={uid} className={!completed ? styles.checkCircle : styles.checkCircleCompleted} onClick={()=>{toggleTodo(uid)}} ></button>
            </div>

        </li>
    )
}

export default Todo 