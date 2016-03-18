import React, {Component, PropTypes} from 'react';
import PureInput from '../PureInput/PureInput';

export default class BricksColumn extends Component {
  static propTypes = {
    name: PropTypes.object.isRequired,
    checked: PropTypes.object.isRequired
  };

  render() {
    const {name, checked} = this.props;
    return (
      <div className="form-group">
        <label htmlFor="cover" className="col-sm-4">{name.value}</label>
        <div className="col-sm-2">
          <PureInput type="checkbox" placeholder="Brick" field={checked} />
        </div>
      </div>
    );
  }
}
