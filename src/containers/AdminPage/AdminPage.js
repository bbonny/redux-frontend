import React, {Component} from 'react';
import Helmet from 'react-helmet';

import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import {BricksCombinator} from 'containers';


export default class AdminPage extends Component {
  render() {
    const styles = require('./AdminPage.scss');

    return (
      <div className={styles.admin}>
        <Helmet title="Admin Mode"/>
        <div className={styles.leftmenu + ' admin-left-menu'}>
          <Nav bsStyle="pills" stacked>
            <NavItem>
              <span className="glyphicon glyphicon-th" aria-hidden="true"></span>
              <br/>
              <span>Wall</span>
            </NavItem>
            <NavItem>
              <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
              <br/>
              <span>Editor</span>
            </NavItem>
            <NavItem>
              <span className="glyphicon glyphicon-folder-open" aria-hidden="true"></span>
              <br/>
              <span>Documents</span>
            </NavItem>
          </Nav>
        </div>
        <div className={styles.container}>
          <BricksCombinator />
        </div>
      </div>
    );
  }
}
