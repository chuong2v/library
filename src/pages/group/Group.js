import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import './style.css'
import styles from './styles'
import {Translate, Localize} from 'react-redux-i18n'
import GroupTable from './GroupTable'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  marginRight: 20,
};

class Group extends Component {
  constructor(props, context){
    super(props, context);
  }
  handleAddNewGroup(event){
    const { groups, actions } = this.props;
    let emptyGroup = groups.filter((group)=> group.groupName ==='')
    if(emptyGroup.length === 0){
      actions.addEmptyGroup();
    }
  }
  render() {
    const { groups, actions } = this.props;
    return (
      <div className='group-container'>
        <Paper className='group' style={styles.container} zDepth={1} >
          <Translate value="group.title" />
          <FloatingActionButton style={style} onTouchTap={this.handleAddNewGroup.bind(this)}>
            <ContentAdd />
          </FloatingActionButton>
          <GroupTable groups={groups} {...actions}/>
        </Paper>
      </div>
    )
  }
}

export default Group