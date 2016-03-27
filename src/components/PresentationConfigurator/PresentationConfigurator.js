import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {ButtonInput, Col, Input, Row} from 'react-bootstrap/lib';

import * as formActions from 'redux/modules/bricks-combinator-form';

@connect(
  undefined,
  formActions,
)
export default class PresentationConfigurator extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    unselectAll: PropTypes.func,
  }

  render() {
    const {
        fields: {clientName, salesName, dividers},
        unselectAll: unselectAll
    } = this.props;
    const styles = require('./PresentationConfigurator.scss');

    return (
      <div className={styles.configurator}>
        <Row className={styles.rowspaced}>
          <Col xs={12} sm={6}>
            <Input
              labelClassName="col-xs-4 col-sm-4"
              wrapperClassName="col-xs-8 col-sm-8"
              type="text"
              label="Client Name"
              placeholder="Enter client name"
              {...clientName}
            />
          </Col>
          <Col xs={12} sm={6}>
            <Input
              labelClassName="col-xs-4"
              wrapperClassName="col-xs-8"
              type="text"
              label="Sales Name"
              placeholder="Enter your name"
              {...salesName}
            />
          </Col>
        </Row>
        <Row className={styles.rowspaced}>
          <Col xs={12} sm={6}>
            <ButtonInput
              label="Template"
              labelClassName="col-xs-4"
              wrapperClassName="col-xs-4"
              className={'btn btn-default'}
              onClick={unselectAll}
            >
              Unselect All
            </ButtonInput>
          </Col>
          <Col xs={12} sm={6}>
            <Input
              labelClassName="col-xs-4 col-sm-4"
              wrapperClassName="col-xs-8 col-sm-8"
              type="select"
              label="Dividers"
              placeholder="Dividers"
              {...dividers}
            >
              <option value="0">Yes</option>
              <option value="1">No</option>
            </Input>
          </Col>
        </Row>
      </div>
    );
  }
}
