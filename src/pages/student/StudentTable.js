import React, {Component} from 'react'
import './style.css'
import styles from './styles'
import {Translate, Localize} from 'react-redux-i18n'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextFieldControlled from '../group/TextFieldControlled';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SelectFieldControlled from './SelectFieldControlled';
import StudentActionCell from './StudentActionCell';




class StudentTable extends Component {
  
  constructor(props, context){
    super(props, context);
    let selectedGroupId = (props.students && props.students.length > 0) ? props.students[0].idGroup:null;
    this.state = {selected:[-1],editing:null,openDeleteModal:false,editingStudentName:null, editingGroupId: null, selectedGroupId: selectedGroupId};
  }

 

  isSelected(index){
    return this.state.selected.indexOf(index)>-1;
  }

  handleRowSelection(selectedRowId){
    this.setState({
      selected:selectedRowId
    });
  }
  handleCellClick(rowNumber, columnId){
    console.log("handleCellClick: " + rowNumber + ", "+ columnId);
  }

  isLastRow(index){
    return this.props.students.length-1 === index;
  }

  handleCloseOnDeleteModal(){
    this.setState({
      openDeleteModal:false
    });
  }

  isRowEditing(index){
    return this.state.editing === index;
  }

  handleDeleteOnDeleteModal(){
    let deletedStudent = this.props.students.filter((student,index,arr)=>
      index === this.state.deleting
    );
    this.props.deleteStudent(deletedStudent[0].idGroup, deletedStudent[0].idStudent);
    this.setState({
      openDeleteModal:false
    });
  }

  handleOnTouchTapEdit(selectedRowId){
    this.handleRowSelection([selectedRowId]);
    this.setState({
      editing:selectedRowId
    });
  }
  handleOnTouchTapDelete(selectedRowId){
    this.setState({
      openDeleteModal:true,
      deleting:selectedRowId
    });
  }

  handleOnSaveStudentName(idStudent, text){
    //at the moment, we don't allow to edit many rows at the same time, so no need to keep idStudent into state.
    this.setState({editingStudentName: text});
  }

  handOnChangeGroupOfStudent(idStudent, event, key, payload ){
    //at the moment, we don't allow to edit many rows at the same time, so no need to keep idStudent into state.
    this.setState({editingGroupId: payload});
  }

  handleOnSave(idStudent){
    let studentName, idGroup;
    let editingGroupId = this.state.editingGroupId;
    if(!this.state.editingGroupId){
      editingGroupId = this.state.selectedGroupId;
    }
    if(this.state.editingStudentName === null || this.state.editingStudentName === undefined || this.state.editingStudentName.trim().length ===0 ){
      return;
    }
    this.props.editStudent(editingGroupId, idStudent, this.state.editingStudentName);
  }

  handleOnCancel(idStudent){
    this.setState({ editing: null, editingStudentName:null, editingGroupId: null });
  }

  render() {
    const DELETE_ACTIONS = [
      <FlatButton
        label="Cancel"
        primary={false}
        onTouchTap={this.handleCloseOnDeleteModal.bind(this)}
      />,
      <FlatButton
        label="Delete"
        primary={true}
        onTouchTap={this.handleDeleteOnDeleteModal.bind(this)}
      />,
    ];
    const { groups, students } = this.props;
    return (
      <div>
        <Table onCellClick={this.handleCellClick.bind(this)} onRowSelection={this.handleRowSelection.bind(this)}>
          <TableHeader displaySelectAll={false}>
            <TableRow>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {students.map( (row, index) => (
                  <TableRow selectable={!this.isRowEditing(index)} selected={this.isSelected(index)} key={index}>
                    <TableRowColumn>
                      <TextFieldControlled value={row.name} editing={this.isRowEditing(index)} onSave={(text) => this.handleOnSaveStudentName(row.idStudent, text)}/>
                      <SelectFieldControlled groups={groups} idGroup={row.idGroup} editing={this.isRowEditing(index)} onChange={(event,key, payload) => this.handOnChangeGroupOfStudent(row.idStudent, event,key, payload)}/>
                    </TableRowColumn>
                    <TableRowColumn style={{overflow: 'visible'}}>
                      <StudentActionCell onEdit={()=>this.handleOnTouchTapEdit(index)} onDelete={()=>this.handleOnTouchTapDelete(index)} lastRow={this.isLastRow(index)} editing={this.isRowEditing(index)} onSave={()=>this.handleOnSave(row.idStudent)} onCancel={()=>this.handleOnCancel(row.idStudent)}/>
                    </TableRowColumn>
                  </TableRow>
                  ))}
          </TableBody>
        </Table>
         <Dialog
          actions={DELETE_ACTIONS}
          modal={false}
          open={this.state.openDeleteModal}
          onRequestClose={this.handleCloseOnDeleteModal.bind(this)}
        >
          Are you sure to delete this user?
      </Dialog>
     </div>)
    }
}

export default StudentTable;