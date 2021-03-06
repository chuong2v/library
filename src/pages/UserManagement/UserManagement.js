import React, {Component} from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import GroupAndStudent from './GroupAndStudent'
import styles from './styles'
import { Translate } from 'react-redux-i18n'

class UserManagement extends Component {
  render() {
    const { groups, students, actions } = this.props;
    return (
      <Tabs
        initialSelectedIndex={1}
        inkBarStyle={styles.inkBar}
        contentContainerStyle={styles.tab}
        tabItemContainerStyle={styles.tabs}
      >
        <Tab label={<Translate value='menu.configuration' />}
          buttonStyle={styles.buttonStyle}
        >
          <div />
        </Tab>
        <Tab label={<Translate value='menu.groupAndStudent' />}
          buttonStyle={styles.buttonStyle}
        >
          <GroupAndStudent groups={groups} students={students} actions={actions}/>
        </Tab>
        <Tab label={<Translate value='menu.qualifications' />}
          buttonStyle={styles.buttonStyle}
        >
          <div />
        </Tab>
        <Tab label={<Translate value='menu.results' />}
          buttonStyle={styles.buttonStyle}
        >
          <div />
        </Tab>
      </Tabs>
    )
  }
}

export default UserManagement