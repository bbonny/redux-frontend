import React, {Component, PropTypes} from 'react';
import PureInput from '../PureInput/PureInput';

export default class BricksColumn extends Component {
  static propTypes = {
    bricks: PropTypes.array,
    name: PropTypes.string,
  };

  render() {
    const {bricks, name} = this.props;
    const styles = require('./BricksColumn.scss');

    return (
      <div className={styles.column}>
        <legend>{name}</legend>
        {bricks.map((brick, index) => <div key={index}>
          <div className="form-group row">
            <div htmlFor="cover" className="col-xs-10 col-sm-10">{brick.name.value}</div>
            <div className="col-xs-2 col-sm-2">
              <PureInput type="checkbox" field={brick.checked} />
            </div>
          </div>
        </div>)}
      </div>
    );
  }
}
