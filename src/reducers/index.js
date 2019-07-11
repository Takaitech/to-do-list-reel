import { combineReducers } from 'redux';
import filter from './filter.reducer';
import todos from './todo.reducer'
import mode from './mode.reducer'

export default combineReducers({
    filter,
    todos,
    mode
})