import React from 'react';
import { connect } from 'react-redux'
import Filter from '../components/Filter'
import styles from '../styles.module.css'

const Filters = ({ activeFilter, todos, dispatch }) => {


    return(
        <div className={styles.filterBar}>
            <Filter activeFilter={activeFilter} todos={todos} filter="ACTIVE" dispatch={dispatch}/>
            <Filter activeFilter={activeFilter} todos={todos} filter="ALL" dispatch={dispatch} />
            <Filter activeFilter={activeFilter} todos={todos} filter="ALL_2" dispatch={dispatch} />
            <Filter activeFilter={activeFilter} todos={todos} filter="COMPLETED" dispatch={dispatch} />
        </div>
    )
}


const mapStateToProps = state => ({
    activeFilter: state.filter,
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    dispatch
})






export default connect(mapStateToProps,mapDispatchToProps)(Filters)