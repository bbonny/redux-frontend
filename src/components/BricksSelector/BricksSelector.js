import React, {Component, PropTypes} from 'react';
import { BricksColumn } from 'components';

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
        <div className="row">
          {columns.map((column, columnIndex) => <div key={columnIndex}>
            <fieldset className="col-xs-12 col-sm-3">
              <legend>Column {columnIndex + 1}</legend>
              <BricksColumn bricks={columns[columnIndex]}/>
            </fieldset>
          </div>)}
        </div>
      </div>
    );
  }
}
