import React from 'react';
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'
import Filters from '../containers/Filters'
import styles from '../styles.module.css'

const App = () => (
    <div className={styles.app}>
        <h1 className={styles.title}>TODO</h1>
        <Filters />
        <TodoList />
        <AddTodo />
    </div>
);

export default App;
