import React,{Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class SelectFieldControlled extends Component{

constructor(props) {
    super(props);
    this.state = {value: null};
  }

handleChange(event, index, value){
    this.setState({value})
}
render() {
     const {groups} = this.props;
    if(!this.props.editing){
        return null;
    }
    return (
      <div>
        <SelectField
          floatingLabelText="Select group"
          value={this.state.value}
          onChange={this.handleChange.bind(this)}>
                    {groups.map( (group, index) => (
                         <MenuItem key={index} value={index} primaryText={group.groupName}/>
                  ))}
        </SelectField>
        </div>
        )};

}