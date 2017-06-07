import React from 'react'
import Paper from 'material-ui/Paper'
import './style.css'
import styles from './styles'
import {Translate, Localize} from 'react-redux-i18n'
import StudentTable from './StudentTable'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const style = {
  marginRight: 20,
};


class Student extends React.Component {
  constructor(props, context){
    super(props, context);
  }

  handleOnTouchTab(event){
  }

  render() {
    const {groups, students, actions } = this.props;
    return (
      <div className='student-container'>
        <Paper className='student' style={styles.container} zDepth={1} >
          <Translate value='student.title'/>
          <FloatingActionButton style={style}>
            <ContentAdd />
          </FloatingActionButton>
          <StudentTable groups={groups} students={students} {...actions}/>
        </Paper>
      </div>
    )
  }
}

export default Student