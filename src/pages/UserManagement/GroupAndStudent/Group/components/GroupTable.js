import React, { Component } from 'react'
import './../style.css'
import styles from './../styles'
import { Translate, Localize } from 'react-redux-i18n'
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import TextFieldControlled from './../../../../../components/TextFieldControlled';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

import * as GroupActions from '../../../../../actions/group';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default class GroupTable extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      selected: [-1], //indicate which group is being selected
      editing: null,  //the row is in the edit mode or not
      openDeleteModal: false //control the delete modal.
    };
  }

  isSelected(row) {
    return this.props.selectedGroup === row.idGroup;
  }

  handleRowSelection(selectedRowIds) {
    this.setState({selected: selectedRowIds});
  }

  isLastRow(index) {
    return this.props.groups.length - 1 === index;
  }

  isRowEditing(idGroup) {
    return this.state.editing === idGroup;
  }

  handleOnTouchTapList(event, selectedRowId) {
    this.handleRowSelection([selectedRowId]);
    this.props.seeStudents(selectedRowId);
  }
  handleOnTouchTapEdit(event, selectedRowId) {
    this.handleRowSelection([selectedRowId]);
    this.setState({
      editing: selectedRowId
    });
  }
  handleOnTouchTapDelete(event, selectedRowId) {
    this.setState({
      openDeleteModal: true,
      deleting: selectedRowId
    });
  }

  handleCloseOnDeleteModal() {
    this.setState({
      openDeleteModal: false
    });
  }

  handleDeleteOnDeleteModal() {
    if (this.state.deleting === -1) {
      this.props.setAddNewGroup(false);
    } else {
      this.props.deleteGroup(this.state.deleting);
    }
    this.setState({
      openDeleteModal: false
    });
  }

  handleOnSave(idGroup, text) {
    if (idGroup === -1) {
      this.props.addNewGroup(text);
    } else {
      this.props.editGroup(idGroup, text);
      this.setState({ editing: null });
    }
  }

  handleOnCancel(idGroup, text){
    if(idGroup == -1){
      this.props.setAddNewGroup(false);
    }
  }

  setSelectedGroup(group) {
    this.props.setSelectedGroup(group.idGroup);
  }

  /**
   * Render a row of a group table.
   * @param {*} index: the index of the row, default: 0
   * @param {*} row : presents for a group, default: idGroup: -1, groupName: ''
   */
  renderRow(index = 0, row = { idGroup: -1, groupName: "" }) {
    let rowActions = (
        <TableRowColumn style={{ overflow: 'visible' }}>
          <IconButton onTouchTap={(event) => this.handleOnTouchTapList(event, row.idGroup)}
                      iconClassName="material-icons"
                      tooltip="Students" tooltipPosition={this.isLastRow(index) ? 'top-center' : 'bottom-center'}>account_box</IconButton>
          <IconButton onTouchTap={(event) => this.handleOnTouchTapEdit(event, row.idGroup)}
                      iconClassName="material-icons" tooltip="Edit"
                      tooltipPosition={this.isLastRow(index) ? 'top-center' : 'bottom-center'}>mode_edit</IconButton>
          <IconButton onTouchTap={(event) => this.handleOnTouchTapDelete(event, row.idGroup)}
                      iconClassName="material-icons" tooltip="Delete"
                      tooltipPosition={this.isLastRow(index) ? 'top-center' : 'bottom-center'}>delete</IconButton>
        </TableRowColumn>
    )
    return (
        <TableRow selectable={!this.isRowEditing(row.idGroup)}
                  selected={this.isSelected.bind(this)(row)} key={index}
                  onTouchTap={this.setSelectedGroup.bind(this, row)}>
          <TableRowColumn>
            <TextFieldControlled value={row.groupName}
                                 editing={this.isRowEditing(row.idGroup)}
                                 dataId={row.idGroup}
                                 onSave={(text) => this.handleOnSave(row.idGroup, text)}
                                 onCancel={()=> this.handleOnCancel(row.idGroup)} />
          </TableRowColumn>
          {row.idGroup != -1 && rowActions || null}
        </TableRow>
    )
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
      />
    ];

    return (<div><Table onRowSelection={this.handleRowSelection.bind(this)}>
          <TableHeader displaySelectAll={false}>
            <TableRow className='group-menu-header'>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Actions</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={false} displayRowCheckbox={false}>
            {this.props.addNew && this.renderRow.bind(this)() || null}
            {groups.map((row, index) => this.renderRow.bind(this)(index, row))}
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