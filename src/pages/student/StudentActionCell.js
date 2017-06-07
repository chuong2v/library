import React,{Component} from 'react'
import './style.css'
import styles from './styles'
import {Translate, Localize} from 'react-redux-i18n'
import IconButton from 'material-ui/IconButton';
import TextFieldControlled from '../group/TextFieldControlled';
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


export default class StudentActionCell extends Component{
    constructor(props){
        super(props);
    }

    render(){
        if(this.props.editing){
            return (
                <div>
                    <FlatButton label="Save" primary={true} onTouchTap={(event)=>this.props.onSave()}/>
                    <FlatButton label="Cancel" secondary={true} onTouchTap={(event)=>this.props.onCancel()}/>
                </div>
            );
        }
        let toolTipStyle = this.props.lastRow?'top-center': 'bottom-center';
        return (
            <div>
             <IconButton onTouchTap={(event)=> this.props.onEdit()} iconClassName="material-icons" tooltip="Edit" tooltipPosition={toolTipStyle}>mode_edit</IconButton>
             <IconButton onTouchTap={(event)=> this.props.onDelete()} iconClassName="material-icons" tooltip="Delete" tooltipPosition={toolTipStyle}>delete</IconButton>
                      
            </div>
        );
    }
}