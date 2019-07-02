import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from "react-redux";
import { createStore } from "redux"
import rootReducer from "./reducers";


const store = createStore(rootReducer)

store.subscribe(() => {
    let state = store.getState()
    console.log(state)
})

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
