import React from 'react'
import styles from '../styles.module.css'

class AdviceGenerator extends React.Component{
    state = {
        advice: ""
    }
    componentDidMount() {
        async function getAdvice() { 
                let res = await fetch("https://api.adviceslip.com/advice") 
                let data = await res.json()
               
                return data
        }
        getAdvice()
            .then(data => this.setState({
                advice: data.slip.advice
            }))
            .catch(err => console.log(err.message))
    }

    render() {
        const { advice } = this.state;
        return(
                <span className={styles.advice}>{advice}</span>
        )
    }
}



export default AdviceGenerator