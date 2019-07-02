import { combineReducers } from 'redux';
import filter from './filter.reducers';
import todos from './todo.reducer'

export default combineReducers({
    filter,
    todos
})