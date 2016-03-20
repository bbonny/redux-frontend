import React, {Component, PropTypes} from 'react';
import { BricksColumn } from 'components';

export default class BricksSelector extends Component {
  static propTypes = {
    bricks: PropTypes.array.isRequired
  };

  getColumns = (bricks) => {
    const columns = [];
    bricks.forEach((brick, index) => {
      if (columns[brick.column.value] === undefined) {
        columns.push([]);
      }
      columns[brick.column.value].push(bricks[index]);
    });
    return columns;
  }

  render() {
    const {bricks} = this.props;
    const columns = this.getColumns(bricks);

    return (
      <div className="row">
        {columns.map((column, columnIndex) => <div key={columnIndex}>
          <fieldset className="col-xs-12 col-sm-3">
            <BricksColumn
              bricks={columns[columnIndex]}
              name={(columnIndex + 1) + ': Column name'}
            />
          </fieldset>
        </div>)}
      </div>
    );
  }
}
