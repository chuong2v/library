import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import * as GroupActions from '../actions/group';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import _ from 'lodash';

export default class TextFieldControlled extends Component {

  constructor(props) {
    super(props);
    let newEditField = props.value.length === 0;
    this.state = {
      text: props.value,
      errorText: '',
      newEditField: newEditField
    };
  }

  handleEnter(e) {
    if (e.keyCode === 13) {
      const text = e.target.value.trim();
      if (text === '') {
        this.setState({ errorText: 'This field is required' });
      } else {
        this.props.onSave(text);
      }
    }
  }

  handleChange(e) {
        this.setState({ text: e.target.value});
  }

  handleBlur(e) {
    const text = e.target.value.trim();
    if (this.props.dataId === -1) {
      this.props.onCancel(text);
    } else if (text === '') {
      this.setState({ errorText: 'This field is required' });
    } else {
      this.props.onSave(text);
    }
  }

  componentWillMount() {
    const id = _.uniqueId("textField-");
    this.setState({id: id});
  }
  /**
   * Many textfields maintain a single state object.
   * During the switching between of different groups to see its students, only the props are updated.
   * In the edit mode, the value is assigned by {this.state.text} and not changed when selecting other group.
   * Therefore, we have to update this state's text to show the correct textfield's value.
   */
  componentWillReceiveProps(nextProps){
    if(this.props.editing !== nextProps.editing){
      this.setState({text: this.props.value});
    }
  }


  render() {
    if (this.props.editing || this.state.newEditField) {
      return (
        <div>
          <TextField
            id = {this.state.id}
            onKeyDown={this.handleEnter.bind(this)}
            autoFocus={true}
            value={this.state.text}
            onBlur={this.handleBlur.bind(this)}
            onChange={this.handleChange.bind(this)}
            errorText={this.state.errorText}
          />
        </div>
      );
    }
    return <div>{this.props.value}</div>;

  }
}