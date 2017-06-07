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
import IconButton from 'material-ui/IconButton';
import TextFieldControlled from './TextFieldControlled';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


class GroupTable extends Component {
  
  constructor(props, context){
    super(props, context);
    this.state = {selected:[-1],editing:null,openDeleteModal:false};
  }

  isSelected(index){
    return this.state.selected.indexOf(index)>-1;
  }

  handleRowSelection(selectedRowIds){
    this.setState({
      selected:selectedRowIds
    });
    // if the selected row is empty row, set it as editing row and focus to it.
    let newGroup = this.props.groups[selectedRowIds[0]];
    if(newGroup && newGroup.groupName === ''){
      this.setState({
      editing:selectedRowIds[0]
      });
    }
  }

  isLastRow(index){
    return this.props.groups.length-1 === index;
  }

  isRowEditing(index){
    return this.state.editing === index;
  }

  handleOnTouchTapList(event, selectedRowId){
    this.handleRowSelection([selectedRowId]);
    this.props.seeStudents(this.props.groups[selectedRowId].idGroup);
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

  handleCloseOnDeleteModal(){
    this.setState({
      openDeleteModal:false
    });
  }

  handleDeleteOnDeleteModal(){
    let deletedGroup = this.props.groups.filter((group,index,arr)=>
      index === this.state.deleting
    );
    this.props.deleteGroup(deletedGroup[0].idGroup);
    this.setState({
      openDeleteModal:false
    });
  }

  handleOnSave(idGroup, text){
    this.props.editGroup(idGroup, text);
    this.setState({ editing: null });
  }

  render() {
    const { groups } = this.props;
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

    return (<div><Table onRowSelection={this.handleRowSelection.bind(this)}>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Actions</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
         {groups.map( (row, index) => (
              <TableRow selectable={!this.isRowEditing(index)} selected={this.isSelected(index)} key={index}>
                <TableRowColumn>
                  <TextFieldControlled value={row.groupName} editing={this.isRowEditing(index)} onSave={(text) => this.handleOnSave(row.idGroup, text)}/>
                </TableRowColumn>
                <TableRowColumn style={{overflow: 'visible'}}>
                  <IconButton onTouchTap={(event)=> this.handleOnTouchTapList(event,index)} iconClassName="material-icons" tooltip="Students" tooltipPosition={this.isLastRow(index) ? 'top-center': 'bottom-center' }>account_box</IconButton>
                  <IconButton onTouchTap={(event)=> this.handleOnTouchTapEdit(event,index)} iconClassName="material-icons" tooltip="Edit" tooltipPosition={this.isLastRow(index) ? 'top-center': 'bottom-center' }>mode_edit</IconButton>
                  <IconButton onTouchTap={(event)=> this.handleOnTouchTapDelete(event,index)} iconClassName="material-icons" tooltip="Delete"  tooltipPosition={this.isLastRow(index)? 'top-center': 'bottom-center' }>delete</IconButton>
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
          Are you sure to delete this group?
      </Dialog>
    </div>
    )
    }
}

export default GroupTable;