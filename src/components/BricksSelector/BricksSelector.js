import React, {Component, PropTypes} from 'react';
import BricksColumn from './BricksColumn';

export default class BricksSelector extends Component {
  static propTypes = {
    bricks: PropTypes.array.isRequired
  };

  getColumns = (bricks) => {
    const result = [[], [], [], []];
    bricks.forEach((brick, index) => {
      result[brick.column.value].push(bricks[index]);
    });
    return result;
  }

  render() {
    const {bricks} = this.props;
    const columns = this.getColumns(bricks);
    return (
      <div>
        <div>
          {columns.map((column, columnIndex) => <div key={columnIndex}>
            {columnIndex}
            {columns[columnIndex].map((brick, index) => <div key={index}>
              <BricksColumn name={brick.name} checked={brick.checked}/>
            </div>)}
          </div>)}
        </div>
      </div>
    );
  }
}
