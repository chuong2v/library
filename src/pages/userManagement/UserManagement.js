import React from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import GroupAndStudent from '../groupAndStudent'

class UserManagement extends React.Component {
  render() {
    return (
      <Tabs>
        <Tab label="1. Configuration" >
          <div />
        </Tab>
        <Tab label="2. Groups and students / os" >
          <GroupAndStudent />
        </Tab>
        <Tab label="3. Qualifications" >
          <div />
        </Tab>
        <Tab label="4. Results" >
          <div />
        </Tab>
      </Tabs>
    )
  }
}

export default UserManagement