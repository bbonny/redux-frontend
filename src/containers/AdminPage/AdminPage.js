import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {BricksCombinator} from 'containers';


export default class AdminPage extends Component {
  render() {
    return (
      <div>
        <Helmet title="Admin Mode"/>
        <div className="container-fluid">
          <BricksCombinator />
        </div>
      </div>
    );
  }
}
