import React, {Component, PropTypes} from 'react';
import PureInput from '../PureInput/PureInput';
import BricksColumn from './BricksColumn';

export default class BricksSelector extends Component {
  static propTypes = {
    bricks: PropTypes.object.isRequired
  };

  getColumns = (bricks) => {
    let result = {};
    bricks.forEach((brick, index) => {
      if (!result[brick.column.value]) {
        result[brick.column.value] = []
      }
      result[brick.column.value].push(bricks[index])
    });
    return result;
  }

  render() {
    const {bricks} = this.props;
    console.log(bricks);
    //columns = this.getColumns(bricks);
    return (
      <div>
        {bricks.map((brick, index) => <div key={index}>
          <BricksColumn name={brick.name} checked={brick.checked}/>
        </div>)}
      </div>
    );
  }
}
