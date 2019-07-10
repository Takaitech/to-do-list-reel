import React from 'react';
import styles from '../styles.module.css'
import { updateFilter } from '../actions/todo.actions'

const Filter = ({dispatch, filter, activeFilter, todos}) => {
        const filterTodos = (todos, filter) => {
                switch(filter) {
                    case "COMPLETED":
                        return todos.filter(todo => todo.completed === true);
                    case "ACTIVE":
                        return todos.filter(todo => todo.completed === false)
                default: return todos
                }
            }


        let filterLength = filterTodos(todos,filter)

        console.log(filterLength)

        return(
            <div className={styles[`${filter}_LinkContainer`]}>
                <button className={(activeFilter === filter || activeFilter === `${filter.substr(0,3)}` || activeFilter === `${filter.substr(0,3)}_2` ) ? `${styles.filterButtonActive} ${styles[`${filter}`]}` : `${styles.filterButton} ${styles[`${filter}`]}`} 
                    onClick={() => {dispatch(updateFilter(filter))}}>
                            {filterLength.length}
                </button>
                <span className={`${styles[`${filter}Text`]}`}>{filter !== "ALL_2" ? filter: "ALL"}</span>
            </div>
        )
}

export default Filter;