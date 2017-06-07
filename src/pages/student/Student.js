import React, {Component} from 'react'
import Paper from 'material-ui/Paper'
import './style.css'
import styles from './styles'
import {Translate, Localize} from 'react-redux-i18n'
import StudentTable from './StudentTable'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddStudentPanel from './AddStudentPanel';

const style = {
  marginRight: 20,
};


class Student extends Component {
  constructor(props, context){
    super(props, context);
    let selectedGroupId = (props.students && props.students.length > 0) ? props.students[0].idGroup:null;
    this.state = {addNewStudents:false, selectedGroupId: selectedGroupId};
  }

  handleAddNewStudents(event){
    this.setState({addNewStudents: true});
  }

  handleOnAddNewStudents(studentnames){
    //slip by "\n" to save as a list of students into this.state.selectedGroupId
    console.log("calling handleOnAddNewStudents: " + studentnames);
  }

  handleOnCancelAddNew(){
    this.setState({addNewStudents: false});
  }

  render() {
    const {groups, students, actions } = this.props;
    return (
      <div className='student-container'>
        <Paper className='student' style={styles.container} zDepth={1} >
          <Translate value='student.title'/>
          <FloatingActionButton style={style} onTouchTap={this.handleAddNewStudents.bind(this)}>
            <ContentAdd />
          </FloatingActionButton>
          <AddStudentPanel onAddNew={(studentNames)=>this.handleOnAddNewStudents(studentNames)} onCancel={()=>this.handleOnCancelAddNew()} show={this.state.addNewStudents}/>
          <StudentTable groups={groups} students={students} {...actions}/>
        </Paper>
      </div>
    )
  }
}

export default Student