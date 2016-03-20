import React, {Component} from 'react';
import {Jumbotron} from 'react-bootstrap';
import Helmet from 'react-helmet';

import {BricksCombinatorContainer} from 'containers';


export default class UserPage extends Component {
  render() {
    const styles = require('./UserPage.scss');
    return (
      <div className={styles.home}>
        <Helmet title="User Mode"/>
        <div className="container">
          <br/>
          <Jumbotron>
            <h1>This is Bricks</h1>
            <p>Eyes Open, Tongue Tied!</p>
          </Jumbotron>
          <BricksCombinatorContainer />
        </div>
      </div>
    );
  }
}
