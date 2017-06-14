import React, { Component } from 'react'
import { GridList } from 'material-ui/GridList'
import Group from './Group'
import Student from './Student'
import styles from './styles'

export default class GroupAndStudent extends Component {
  render() {
    const { groups, students, actions } = this.props;
    return (
      <div style={styles.root}>
        <GridList
          cols={2}
          padding={1}
          style={styles.gridList}
        >
          <Group />
          <Student />
        </GridList>
      </div>
    )
  }
}