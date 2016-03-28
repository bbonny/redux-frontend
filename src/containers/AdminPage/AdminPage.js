import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import Helmet from 'react-helmet';
import { LinkContainer } from 'react-router-bootstrap';

import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

import {BricksCombinator} from 'containers';
import {DocumentsExplorer} from 'components';

@connect(
  state => ({pathname: state.routing.location.pathname}),
  undefined)
export default class AdminPage extends Component {
  static propTypes = {
    pathname: PropTypes.string,
  }

  render() {
    const styles = require('./AdminPage.scss');
    return (
      <div className={styles.admin}>
        <Helmet title="Admin Mode"/>
        <div className={styles.leftmenu + ' admin-left-menu'}>
          <Nav bsStyle="pills" stacked>
            <LinkContainer to="/admin/wall">
              <NavItem>
                <span className="glyphicon glyphicon-th" aria-hidden="true"></span>
                <br/>
                <span>Wall</span>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/admin/edit">
              <NavItem>
                <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
                <br/>
                <span>Editor</span>
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/admin/documents">
              <NavItem>
                <span className="glyphicon glyphicon-folder-open" aria-hidden="true"></span>
                <br/>
                <span>Documents</span>
              </NavItem>
            </LinkContainer>
          </Nav>
        </div>
        <div className={styles.container}>
          {this.props.pathname === '/admin/wall' &&
            <BricksCombinator />
          }
          {this.props.pathname === '/admin/edit' &&
            <h5>Edition</h5>
          }
          {this.props.pathname === '/admin/documents' &&
            <DocumentsExplorer />
          }
        </div>
      </div>
    );
  }
}
