import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { IndexLink } from 'react-router';
import config from '../../config';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Helmet from 'react-helmet';

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
        <Navbar fixedTop>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" activeStyle={{color: '#ffffff'}}>
                <div className={styles.brand}/>
                <span>{config.app.title}</span>
              </IndexLink>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
            <NavDropdown title="Mode" id="nav-dropdown">
              <LinkContainer to="/">
                <MenuItem>User Mode</MenuItem>
              </LinkContainer>
              <LinkContainer to="/admin">
                <MenuItem>Admin Mode</MenuItem>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar>

        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
