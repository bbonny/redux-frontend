import React, {Component, PropTypes} from 'react';
import PureInput from '../PureInput/PureInput';

export default class BricksColumn extends Component {
  static propTypes = {
    bricks: PropTypes.array,
  };

  render() {
    const {bricks} = this.props;

    return (
      <div>
        {bricks.map((brick, index) => <div key={index}>
          <div className="form-group">
            <label htmlFor="cover" className="col-sm-4">{brick.name.value}</label>
            <div className="col-sm-2">
              <PureInput type="checkbox" placeholder="Brick" field={brick.checked} />
            </div>
          </div>
        </div>)}
      </div>
    );
  }
}
