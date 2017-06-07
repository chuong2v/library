import React,{Component} from 'react';
import TextField from 'material-ui/TextField';

export default class TextFieldControlled extends Component {

  constructor(props) {
    super(props);
    let isEmptyField = props.value.length === 0; 
    this.state = {text : props.value, errorText: '', newField: isEmptyField}; 
  }

  handleEnter(e) {
    if (e.keyCode === 13) {
      const text = e.target.value.trim();
      if(text === ''){
        this.setState({errorText: 'This field is required'})
      }else{
        this.props.onSave(text);
        this.refs.textField.blur();
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


  render() {
    if(this.props.editing || this.state.newField){
      return (
        <div>
          <TextField ref="textField"
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
