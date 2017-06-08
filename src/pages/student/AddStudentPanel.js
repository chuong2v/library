import React, { Component } from 'react'
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import { ActionCreators } from '../../actions';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class AddStudentPanel extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            text: '', 
            errorText: '',
            addNew: true 
        };
    }

    handleOnTapSave(event) {
        if (this.state.text.trim().length > 0) {
            this.props.actions.addStudentToGroup(this.props.selectedGroup, this.state.text.trim())
            .then(()=> {
                this.props.actions.setAddNewStudent(false)
            });
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
        if (this.props.addNew) {
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


function mapStateToProps(state) {
    return {
        selectedGroup: state.group.selected,
        addNew: state.student.addNew
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(ActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddStudentPanel)