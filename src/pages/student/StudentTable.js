import React from 'react'
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
import IconButton from 'material-ui/IconButton';
import TextFieldControlled from '../group/TextFieldControlled';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import SelectFieldControlled from './SelectFieldControlled';



class StudentTable extends React.Component {
  
  constructor(props, context){
    super(props, context);
    this.state = {selected:[-1],editing:null,openDeleteModal:false};
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

  handleOnTouchTapEdit(event, selectedRowId){
    this.handleRowSelection([selectedRowId]);
    this.setState({
      editing:selectedRowId
    });
  }
  handleOnTouchTapDelete(event, selectedRowId){
    this.setState({
      openDeleteModal:true,
      deleting:selectedRowId
    });
  }

  handleOnSaveStudentName(idStudent, text){
    // this.props.editStudentName(idStudent, text);
    // this.setState({ editing: null });
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
                      <SelectFieldControlled groups={groups} editing={this.isRowEditing(index)}/>
                    </TableRowColumn>
                    <TableRowColumn style={{overflow: 'visible'}}>
                      <IconButton onTouchTap={(event)=> this.handleOnTouchTapEdit(event,index)} iconClassName="material-icons" tooltip="Edit" tooltipPosition={this.isLastRow(index)? 'top-center': 'bottom-center' }>mode_edit</IconButton>
                      <IconButton onTouchTap={(event)=> this.handleOnTouchTapDelete(event,index)} iconClassName="material-icons" tooltip="Delete" tooltipPosition={this.isLastRow(index)? 'top-center': 'bottom-center' }>delete</IconButton>
                      {/*<FlatButton label="Save" primary={true} />
                      <FlatButton label="Cancel" secondary={true} />*/}
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