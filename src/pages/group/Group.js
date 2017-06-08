import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import './style.css'
import styles from './styles'
import {Translate, Localize} from 'react-redux-i18n'
import GroupTable from './GroupTable'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Divider from 'material-ui/Divider';
import ContentAdd from 'material-ui/svg-icons/content/add';

import * as GroupActions from '../../actions/group';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Group extends Component {
  constructor(props, context){
    super(props, context);
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
    addNew: state.group.addNew,
    students: state.student.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GroupActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Group)