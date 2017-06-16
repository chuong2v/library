import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

export default class AddStudentPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      errorText: ''
    };
  }

  handleOnTapSave(event) {
    let text = this.state.text;
    if (text.length > 0) {
      this.props.onAddNew(text.split('\n'))
    } else {
      this.setState({ errorText: 'This field is required' })
    }
  }

  handleOnTabCancel(event) {
    this.setState({ text: '', errorText: '' });
    this.props.onCancel();
  }

  handleBlur(e) {
    const text = e.target.value.trim();
    if (text === '') {
      this.setState({ errorText: 'This field is required' })
    } else {
      this.setState({ errorText: '' })
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    if (this.props.show) {
      return (
        <div>
          <div>Introduce students / os</div>
          <div>Enter the names of the students and pupils, each on a different line.</div>
          <TextField
            hintText="Alan Turing"
            multiLine={true}
            autoFocus={true}
            rows={1}
            rowsMax={5}
            errorText={this.state.errorText}
            onBlur={this.handleBlur.bind(this)}
            onChange={this.handleChange.bind(this)} />
          <div>
            <FlatButton label="Save" primary={true} onTouchTap={(event) => this.handleOnTapSave(event)} />
            <FlatButton label="Cancel" secondary={true} onTouchTap={(event) => this.handleOnTabCancel(event)} />
          </div>
        </div>
      )
    };
    return null;
  }
}