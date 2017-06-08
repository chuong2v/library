import React, { Component } from 'react'
import Paper from 'material-ui/Paper'
import './style.css'
import styles from './styles'
import { Translate } from 'react-redux-i18n'
import StudentTable from './StudentTable'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
import AddStudentPanel from './AddStudentPanel';

import { ActionCreators } from '../../actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Student extends Component {
  constructor(props, context) {
    super(props, context);
    let selectedGroupId = (props.students && props.students.length > 0) ? props.students[0].id : null;
    this.state = { 
      addNewStudents: false, 
      selectedGroupId: selectedGroupId 
    };
  }

  handleAddNewStudents(event) {
    this.props.actions.setAddNewStudent(!this.props.addNew);  
  }

  handleOnAddNewStudents(studentnames) {
    //slip by "\n" to save as a list of students into this.state.selectedGroupId
    console.log("calling handleOnAddNewStudents: " + studentnames);
  }

  handleOnCancelAddNew() {
    this.props.actions.setAddNewStudent(false);
  }

  render() {
    const { groups, students, actions } = this.props;
    return (
      <div className='student-container'>
        <Paper className='student' style={styles.container} zDepth={1} >
          <div className='student-bar'>
            <Translate value='student.title' />
            <FloatingActionButton mini
              className='student-add-button'
              onTouchTap={this.handleAddNewStudents.bind(this)}>
              {this.props.addNew && <ContentClear/> || <ContentAdd />}
            </FloatingActionButton>
          </div>
          <AddStudentPanel onAddNew={(studentNames) => this.handleOnAddNewStudents(studentNames)} 
            onCancel={() => this.handleOnCancelAddNew()} 
            show={this.props.addNew} />
          <StudentTable groups={groups} students={students} {...actions} />
        </Paper>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    addNew: state.student.addNew,
    students: state.student.list,
    selectedGroup: state.group.selected
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student)