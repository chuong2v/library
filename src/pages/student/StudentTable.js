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

class StudentTable extends React.Component {
  
  constructor(props, context){
    super(props, context);
    this.state = {selected:[1]};
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

  render() {
    const { students } = this.props;
    return (<Table onCellClick={this.handleCellClick.bind(this)} onRowSelection={this.handleRowSelection.bind(this)}>
      <TableHeader displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Actions</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
         {students.map( (row, index) => (
              <TableRow selected={this.isSelected(index)} key={index}>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn style={{overflow: 'visible'}}>
                  <IconButton iconClassName="material-icons" tooltip="Edit" tooltipPosition={this.isLastRow(index)? 'top-center': 'bottom-center' }>mode_edit</IconButton>
                  <IconButton iconClassName="material-icons" tooltip="Delete" tooltipPosition={this.isLastRow(index)? 'top-center': 'bottom-center' }>delete</IconButton>
                </TableRowColumn>
              </TableRow>
              ))}
      </TableBody>
    </Table>)
    }
}

export default StudentTable;