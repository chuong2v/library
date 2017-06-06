import React from 'react'
import Paper from 'material-ui/Paper'
import './style.css'
import styles from './styles'
import { Translate } from 'react-redux-i18n'

class Group extends React.Component {
  render() {
    return (
      <div className='group-container'>
        <Paper className='group' style={styles.container} zDepth={1} >
          <Translate value="group.title" />
        </Paper>
      </div>
    )
  }
}

export default Group