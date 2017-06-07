import React, {Component} from 'react'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
export default class AddStudentPanel extends Component{
    constructor(props){
        super(props);
        this.state = {text:'', errorText: ''};
    }

    handleOnTapSave(event){
        if(this.state.text.trim().length > 0){
            this.setState({errorText: ''})
            this.props.onAddNew(this.state.text.trim());
        }else{
            this.setState({errorText: 'This field is required'})
        }
    }

    handleOnTabCancel(event){
        this.setState({text:'', errorText:''});
        this.props.onCancel();
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    render(){
        if(this.props.show){
            return (
                <div>
                    <div>Introduce students / os</div>
                    <div>Enter the names of the students and pupils, each on a different line.</div>
                    <TextField
                    autoFocus={true}
                    hintText="Alan Turing"
                    multiLine={true}
                    rows={1}
                    rowsMax={5}
                    errorText = {this.state.errorText}
                    onChange={this.handleChange.bind(this)}/>
                    <div>
                        <FlatButton label="Save" primary={true} onTouchTap={(event)=>this.handleOnTapSave(event)}/>
                        <FlatButton label="Cancel" secondary={true} onTouchTap={(event)=>this.handleOnTabCancel(event)}/>
                    </div>
                </div>
            )
        };
        return null;
    }
}