import React from 'react';
import './css/App.css';
import './css/style.css';
import './css/agency.min.css';
import './font-awesome/css/font-awesome.css';

export default class App extends React.Component {

  render() {

    return (
      <div>
        {/* <Navbar className="customnavbar">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Home</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight>
              <NavItem eventKey={1} href="/login" className="login-btn btn-area">
                <i className="fa fa-sign-in"></i>&nbsp;&nbsp; Login/Register
              </NavItem>
          </Nav>

          <Nav pullRight>
              <NavItem eventKey={1} href="/" className="signout-btn btn-area">
                <i className="fa fa-sign-in"></i>&nbsp;&nbsp; Sign out
              </NavItem>
          </Nav>
        </Navbar> */}
        
        <div className="container">
          { /* Each Smaller Components */}
          {this.props.children}
        </div>
      </div>
    );
  }
}
