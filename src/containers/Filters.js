import React from 'react';
import { connect } from 'react-redux'
import Filter from '../components/Filter'
import styles from '../styles.module.css'

const Filters = ({ activeFilter, dispatch }) => {
    return(
        <div className={styles.filterBar}>
            <Filter activeFilter={activeFilter} filter="ACTIVE" dispatch={dispatch}/>
            <Filter activeFilter={activeFilter} filter="COMPLETED" dispatch={dispatch} />
            <Filter activeFilter={activeFilter} filter="ALL" dispatch={dispatch} />
        </div>
    )
}



const mapStateToProps = state => ({
    activeFilter: state.filter
})

const mapDispatchToProps = dispatch => ({
    dispatch
})






export default connect(mapStateToProps,mapDispatchToProps)(Filters)