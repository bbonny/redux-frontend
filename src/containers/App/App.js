import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import config from '../../config';
import Helmet from 'react-helmet';
import {NavigationBar} from 'components';

@asyncConnect([{
  promise: () => {
    const promises = [];
    return Promise.all(promises);
  }
}])
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  render() {
    const styles = require('./App.scss');

    return (
      <div className={styles.app}>
        <Helmet {...config.app.head}/>
        <NavigationBar />
        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
