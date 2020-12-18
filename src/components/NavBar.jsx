import React,  { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, withRouter } from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props);

   
  }
  render() {
    return (
      <div>
        {console.log('NAVBAR PROPS --> ', this)}
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
          <Link to="/">
            <Navbar.Brand>
              {this.title} STRIVESTAURANT  
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/menu"
                className={
                  this.props.location.pathname === '/menu'
                    ? "nav-link active"
                    : "nav-link"
                }>
                Menu
              </Link>
              <Link to="/reservation"
                className={
                  this.props.location.pathname === '/reservation'
                    ? "nav-link active"
                    : "nav-link"
                }>
                Reservation
              </Link>
              <Link to="/location" className="nav-link">Our Location</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
  
}

export default withRouter(NavBar);
