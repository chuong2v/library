import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import GroupAndStudent from '../groupAndStudent'
import styles from './styles'
import {Translate, Localize} from 'react-redux-i18n'

class UserManagement extends React.Component {
  render() {
    const { groups, students, actions } = this.props;
    return (
      <Tabs
        initialSelectedIndex={1}
        inkBarStyle={styles.inkBar}
        contentContainerStyle={styles.tab}
        tabItemContainerStyle={styles.tabs}
      >
        <Tab label={<Translate value='menu.1'/>}
          buttonStyle={styles.buttonStyle}
        >
          <div />
        </Tab>
        <Tab label={<Translate value='menu.2'/>}
          buttonStyle={styles.buttonStyle}
        >
          <GroupAndStudent groups={groups} students={students} actions={actions}/>
        </Tab>
        <Tab label={<Translate value='menu.3'/>}
          buttonStyle={styles.buttonStyle}
        >
          <div />
        </Tab>
        <Tab label={<Translate value='menu.4'/>}
          buttonStyle={styles.buttonStyle}
        >
          <div />
        </Tab>
      </Tabs>
    )
  }
}

export default UserManagement