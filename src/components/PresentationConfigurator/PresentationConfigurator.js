import React, {Component, PropTypes} from 'react';
import {Col, Input, Row} from 'react-bootstrap/lib';


export default class PresentationConfigurator extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired
  }

  render() {
    const {
        fields: {clientName, salesName, templateName, dividers}
    } = this.props;
    const styles = require('./PresentationConfigurator.scss');

    return (
      <div className={styles.configurator}>
          <Row>
            <Col xs={12} md={6}>
              <Input type="text" label="Client Name" placeholder="Enter client name" {...clientName}/>
            </Col>
            <Col xs={12} md={6}>
              <Input type="text" label="Sales Name" placeholder="Enter your name" {...salesName}/>
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <Input type="select" label="Template Name" placeholder="Template Name" {...templateName}>
                <option value="0">Classic</option>
              </Input>
            </Col>
            <Col xs={12} md={6}>
              <Input type="select" label="Dividers" placeholder="Dividers" {...dividers}>
                <option value="0">Without dividers</option>
                <option value="1">One divider</option>
                <option value="2">Two dividers</option>
                <option value="3">Three dividers</option>
                <option value="4">Four dividers</option>
              </Input>
            </Col>
          </Row>
      </div>
    );
  }
}
