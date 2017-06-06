import React from 'react'
import Paper from 'material-ui/Paper'
import './style.css'
import styles from './styles'
import { Translate } from 'react-redux-i18n'

class Student extends React.Component {
  render() {
    return (
      <div className='student-container'>
        <Paper className='student' style={styles.container} zDepth={1} >
          <Translate value='student.title' />
        </Paper>
      </div>
    )
  }
}

export default Student