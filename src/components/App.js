import React from 'react';
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'

const App = () => (
    <div className="App">
        <AddTodo />
        <TodoList />
    </div>
);

export default App;
