import React, {Component, PropTypes} from 'react';
import {PureInput} from 'components';
import {Grid} from 'react-bootstrap/lib/Grid';

export default class PresentationConfigurator extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired
  }

  render() {
    const {
        fields: {clientName, salesName, templateName, dividers}
    } = this.props;

    return (
      <div className="form-group">
<Grid componentClass="div"/>
      <PureInput type="text" className="form-control" placeholder="Client Name" field={clientName}/><br/>
        <PureInput type="text" className="form-control" placeholder="Sales Name" field={salesName}/><br/>
        <PureInput type="text" className="form-control" placeholder="Template Name" field={templateName}/><br/>
        <PureInput type="text" className="form-control" placeholder="Dividers" field={dividers}/><br/>
      </div>
    );
  }
}
