import React from 'react';
import styles from '../styles.module.css'
import { updateFilter } from '../actions/todo.actions'

const Filter = ({dispatch, filter, activeFilter}) => {
    console.log(filter)
    console.log(`${filter}_2`)
    return(
            <div className={styles[`${filter}_LinkContainer`]}>
                <span className={`${styles[`${filter}Text`]}`}>{filter !== "ALL_2" ? filter: "ALL"}</span>
                <button className={(activeFilter === filter || activeFilter === `${filter.substr(0,3)}` || activeFilter === `${filter.substr(0,3)}_2` ) ? `${styles.filterButtonActive} ${styles[`${filter}`]}` : `${styles.filterButton} ${styles[`${filter}`]}`} 
                    onClick={() => {dispatch(updateFilter(filter))}}>
                </button>
            </div>
    )
}

export default Filter;