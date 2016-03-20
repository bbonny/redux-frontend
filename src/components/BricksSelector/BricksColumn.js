import React, {Component, PropTypes} from 'react';
import { Brick } from 'components';


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
        <h5>{name}</h5>
        {bricks.map((brick, index) => <div key={index}>
          <Brick brick={brick}/>
        </div>)}
      </div>
    );
  }
}
