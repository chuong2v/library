import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import GroupAndStudent from '../groupAndStudent'
import styles from './styles'

class UserManagement extends React.Component {
  render() {
    return (
      <Tabs
        initialSelectedIndex={1}
        inkBarStyle={styles.inkBar}
        contentContainerStyle={styles.tab}
        tabItemContainerStyle={styles.tabs}
      >
        <Tab label="1. Configuration"
          buttonStyle={styles.buttonStyle}
        >
          <div />
        </Tab>
        <Tab label="2. Groups and students / os"
          buttonStyle={styles.buttonStyle}
        >
          <GroupAndStudent />
        </Tab>
        <Tab label="3. Qualifications"
          buttonStyle={styles.buttonStyle}
        >
          <div />
        </Tab>
        <Tab label="4. Results"
          buttonStyle={styles.buttonStyle}
        >
          <div />
        </Tab>
      </Tabs>
    )
  }
}

export default UserManagement