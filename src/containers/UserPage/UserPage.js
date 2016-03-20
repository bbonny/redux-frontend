import React, {Component} from 'react';
import Helmet from 'react-helmet';

import {BricksCombinator} from 'containers';


export default class UserPage extends Component {
  render() {
    const styles = require('./UserPage.scss');
    return (
      <div className={styles.home}>
        <Helmet title="User Mode"/>
        <div className="container">
          <BricksCombinator />
        </div>
      </div>
    );
  }
}
