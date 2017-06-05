import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import Group from '../group/Group'
import Student from '../student/Student'
import styles from './styles'

class GroupAndStudent extends React.Component {
  render() {
    return (
      <div style={styles.root}>
        <GridList
          cols={2}
          padding={1}
          style={styles.gridList}
        >
          <Student/>
          <Group />
        </GridList>
      </div>
    )
  }
}

export default GroupAndStudent