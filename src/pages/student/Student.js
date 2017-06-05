import React from 'react'
import Paper from 'material-ui/Paper'
import './style.css'
import styles from './styles'

class Student extends React.Component {
  render() {
    return (
      <div className='student-container'>
        <Paper className='student' style={styles.container} zDepth={1} >
          This is Student page
        </Paper>
      </div>
    )
  }
}

export default Student