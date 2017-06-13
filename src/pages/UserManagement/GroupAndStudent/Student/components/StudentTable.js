import React, { Component } from 'react'
import './style.css'
import styles from './styles'
import { Translate, Localize } from 'react-redux-i18n'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextFieldControlled from '../../components/TextFieldControlled';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import SelectFieldControlled from './SelectFieldControlled';
import StudentActionCell from './StudentActionCell';
import * as StudentActions from '../../actions/student'

import * as GroupActions from '../../actions/group';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

export default class StudentTable extends Component {

  constructor(props, context) {
    super(props, context);
    let selectedGroupId = (props.students && props.students.length > 0) ? props.students[0].id : null;
    this.state = { selected: [-1], editing: null, openDeleteModal: false, editingStudentName: null, editingGroupId: null, selectedGroupId: selectedGroupId };
  }

  isSelected(index) {
    return this.state.selected.indexOf(index) > -1;
  }

  handleRowSelection(selectedRowId) {
    this.setState({
      selected: selectedRowId
    });
  }
  handleCellClick(rowNumber, columnId) {
    console.log("handleCellClick: " + rowNumber + ", " + columnId);
  }

  isLastRow(index) {
    return this.props.students.length - 1 === index;
  }

  handleCloseOnDeleteModal() {
    this.setState({
      openDeleteModal: false
    });
  }

  isRowEditing(index) {
    return this.state.editing === index;
  }

  handleDeleteOnDeleteModal() {
    this.props.deleteStudent(this.state.deleting);
    this.setState({
      openDeleteModal: false
    });
  }

  handleOnTouchTapEdit(selectedRowId) {
    this.handleRowSelection([selectedRowId]);
    this.setState({
      editing: selectedRowId
    });
  }
  handleOnTouchTapDelete(selectedRowId) {
    this.setState({
      openDeleteModal: true,
      deleting: selectedRowId
    });
  }

  handleOnSaveStudentName(idStudent, text) {
    //at the moment, we don't allow to edit many rows at the same time, so no need to keep idStudent into state.
    this.setState({ editingStudentName: text });
  }

  handOnChangeGroupOfStudent(idStudent, event, key, payload) {
    //at the moment, we don't allow to edit many rows at the same time, so no need to keep idStudent into state.
    this.setState({ editingGroupId: payload });
  }

  handleOnSave(idStudent) {
    let studentName, idGroup;
    let editingGroupId = this.state.editingGroupId;
    if (!this.state.editingGroupId) {
      editingGroupId = this.state.selectedGroupId;
    }
    if (this.state.editingStudentName === null || this.state.editingStudentName === undefined || this.state.editingStudentName.trim().length === 0) {
      return;
    }
    let student = {
      groupId: editingGroupId,
      studentName: this.state.editingStudentName
    }
    this.props.editStudent(idStudent, student);
  }

  handleOnCancel(idStudent) {
    this.setState({ editing: null, editingStudentName: null, editingGroupId: null });
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
            {students.map((row, index) => (
              <TableRow selectable={!this.isRowEditing(row.id)}
                selected={this.isSelected(index)} key={index}>
                <TableRowColumn>
                  <TextFieldControlled value={row.studentName}
                    editing={this.isRowEditing(row.id)}
                    onSave={(text) => this.handleOnSaveStudentName(row.id, text)} />
                  <SelectFieldControlled groups={groups}
                    idGroup={row.groupId}
                    editing={this.isRowEditing(row.id)}
                    onChange={(event, key, payload) => this.handOnChangeGroupOfStudent(row.id, event, key, payload)} />
                </TableRowColumn>
                <TableRowColumn style={{ overflow: 'visible' }}>
                  <StudentActionCell onEdit={() => this.handleOnTouchTapEdit(row.id)}
                    onDelete={() => this.handleOnTouchTapDelete(row.id)}
                    lastRow={this.isLastRow(index)}
                    editing={this.isRowEditing(row.id)}
                    onSave={() => this.handleOnSave(row.id)}
                    onCancel={() => this.handleOnCancel(row.id)} />
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