import React from 'react'
import Paper from 'material-ui/Paper'
import './style.css'
import styles from './styles'

class Group extends React.Component {
  render() {
    return (
      <div className='group-container'>
        <Paper className='group' style={styles.container} zDepth={1} >
          This is Group page
        </Paper>
      </div>
    )
  }
}

export default Group