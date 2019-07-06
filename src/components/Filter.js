import React from 'react';
import styles from '../styles.module.css'
import { updateFilter } from '../actions/todo.actions'

const Filter = ({dispatch, filter, activeFilter}) => {
    return(
        <button className={activeFilter == filter ?styles.filterButtonActive : styles.filterButton } onClick={() => {dispatch(updateFilter(filter))}} >{filter}</button>
    )
}

export default Filter;