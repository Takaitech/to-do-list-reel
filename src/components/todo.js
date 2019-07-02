import React from 'react'

const Todo = ({text}) => {
    return (
        <li>
            <input type="text" defaultValue={text}>
            </input>
        </li>
    )
}

export default Todo