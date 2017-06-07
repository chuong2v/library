import React from 'react';
import TextField from 'material-ui/TextField';

export default class TextFieldControlled extends React.Component {

  constructor(props) {
    super(props);
    let isNewGroup = props.value.length === 0;
    this.state = {text : props.value, errorText: '', newGroup: isNewGroup};
  }

  handleEnter(e) {
    if (e.keyCode === 13) {
      const text = e.target.value.trim();
      if(text === ''){
        this.setState({errorText: 'This field is required'})
      }else{
        this.props.onSave(text);
      }
      
      if (this.props.newTodo) {
        this.setState({ text: '' });
      }
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    const text = e.target.value.trim();
    if(text === ''){
        this.setState({errorText: 'This field is required'})
    }else{
      this.props.onSave(text);
    }
  }

  getHintText(){
    if(this.state.newGroup){
      return "Enter new group name";
    }else{
      return "";
    }
  }

  render() {
    if(this.props.editing || this.state.newGroup){
      return (
        <div>
          <TextField
            onKeyDown={this.handleEnter.bind(this)}
            autoFocus={true}
            id="text-field-controlled"
            value={this.state.text}
            onBlur={this.handleBlur.bind(this)}
            onChange={this.handleChange.bind(this)}
            errorText = {this.state.errorText}
          />
        </div>
      );
    }

    return <div>{this.props.value}</div>;

  }
}
