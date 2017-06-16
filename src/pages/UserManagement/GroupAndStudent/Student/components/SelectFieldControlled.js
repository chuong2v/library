import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class SelectFieldControlled extends Component {

  constructor(props) {
    super(props);
    this.state = { value: props.idGroup };
  }

  handleChange(event, index, value) {
    this.setState({ value: value });
    this.props.onChange(event, index, value);
  }

  /**
   * Many SelectFields maintain a single state object.
   * During the switching between of different groups to see its students, only the props are updated.
   * In the edit mode, the value is assigned by {this.state.value} and not changed when selecting other group.
   * Therefore, we have to update this state's value to show the correct value.
   */
  componentWillReceiveProps(nextProps){
    if(this.props.editing !== nextProps.editing){
      this.setState({value: this.props.idGroup});
    }
  }

  render() {
    const { groups } = this.props;
    if (!this.props.editing) {
      return null;
    }
    return (
      <div>
        <SelectField
          value={this.state.value}
          onChange={this.handleChange.bind(this)}>
          {groups.map((group, index) => (
            <MenuItem key={index} value={group.idGroup} primaryText={group.groupName} />
          ))}
        </SelectField>
      </div>
    )
  };

}