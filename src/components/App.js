import React from 'react';
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'
import Filters from '../containers/Filters'
import styles from '../styles.module.css'
import DeleteMode from '../containers/DeleteMode'
import AdviceGenerator from './AdviceGenerator';

const App = () => (
    <div className={styles.app}>
        <h1 className={styles.title}>TODO</h1>
        <Filters />
        <AdviceGenerator />
        <TodoList />
        <DeleteMode />
        <AddTodo />
    </div>
);

export default App;
