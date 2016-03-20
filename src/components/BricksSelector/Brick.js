import React, {Component, PropTypes} from 'react';
import PureInput from '../PureInput/PureInput';

export default class BricksColumn extends Component {
  static propTypes = {
    brick: PropTypes.object,
  };

  render() {
    const {brick} = this.props;
    const styles = require('./Brick.scss');

    return (
      <div className={styles.brick}>
        <div className="row">
          <div htmlFor="cover" className="col-xs-10 col-sm-10">{brick.name.value}</div>
          <div className="col-xs-2 col-sm-2">
            <PureInput type="checkbox" field={brick.checked} />
          </div>
        </div>
      </div>
    );
  }
}
