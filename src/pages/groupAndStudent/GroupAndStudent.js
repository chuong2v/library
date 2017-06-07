import React from 'react'
import { GridList, GridTile } from 'material-ui/GridList'
import Group from '../group/Group'
import Student from '../student/Student'
import styles from './styles'

class GroupAndStudent extends React.Component {
  render() {
    const { groups, students, actions } = this.props;
    return (
      <div style={styles.root}>
        <GridList
          cols={2}
          padding={1}
          style={styles.gridList}
        >
          <Group groups={groups} actions={actions}/>
          <Student groups={groups} students = {students} actions={actions}/>
        </GridList>
      </div>
    )
  }
}

export default GroupAndStudent