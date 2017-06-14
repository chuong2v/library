import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import './style.css'
import styles from './styles'
import { Translate } from 'react-redux-i18n'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Divider from 'material-ui/Divider';
import ContentAdd from 'material-ui/svg-icons/content/add';

import GroupTable from './components/GroupTable'
import * as GroupActions from '../../../../actions/group';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class GroupContainer extends Component {
  constructor(props, context){
    super(props, context);
  }

  componentDidMount() {
    this.props.actions.fetchGroupsFromApi().then(()=> {
      let selectedGroup = this.props.groups[0] && this.props.groups[0].id
      this.props.actions.setSelectedGroup(selectedGroup)
      this.props.actions.seeStudents(selectedGroup)
    })
  }

  handleAddNewGroup(event){
    this.props.actions.setAddNewGroup(true)
  }
  render() {
    const { groups, actions } = this.props;
    return (
      <div className='group-container'>
        <Paper className='group' style={styles.container} zDepth={1} >
          <div className='group-bar'>
            <Translate value="group.title" />
            <FloatingActionButton mini
              className='group-add-button'
              onTouchTap={this.handleAddNewGroup.bind(this)}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
          <GroupTable groups={groups} {...actions}/>
        </Paper>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    groups: state.group.list,
    addNew: state.group.addNew
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GroupActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupContainer)
