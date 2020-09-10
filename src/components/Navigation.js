import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchNews } from "../actions/News";

class Navigation extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link to="/">
              <Button className="nav-btn">Top News</Button>
            </Link>
            <Link to="/health">
              <Button className="nav-btn">Health Care</Button>
            </Link>
            <Link to="/immigration">
              <Button className="nav-btn">Immigration</Button>
            </Link>
            <Link to="/voting">
              <Button className="nav-btn">Voting</Button>
            </Link>
            <Link to="/climate">
              <Button className="nav-btn">Climate</Button>
            </Link>
            <Link to="/education">
              <Button className="nav-btn">Education</Button>
            </Link>
            <Link to="/foreign">
              <Button className="nav-btn">Foreign Policy</Button>
            </Link>
            <Link to="/economy">
              <Button className="nav-btn">Economy</Button>
            </Link>
            <Link to="/guns">
              <Button className="nav-btn">Gun Policy</Button>
            </Link>
            <Link to="/criminal">
              <Button className="nav-btn">Criminal Justice</Button>
            </Link>
            {/*             <Nav.Link href="/immigration">Immigration</Nav.Link>
            <Nav.Link href="/voting">Voting</Nav.Link>
            <Nav.Link href="/climate">Climate</Nav.Link>
            <Nav.Link href="/education">Education</Nav.Link>
            <Nav.Link href="/foreign">Foreign Policy</Nav.Link>
            <Nav.Link href="/economy">Economy</Nav.Link>
            <Nav.Link href="/guns">Gun Policy</Nav.Link>
            <Nav.Link href="/criminal">Criminal Justice</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
const mapStateToProps = (state) => ({
  news: state.news.news,
});
export default connect(mapStateToProps, { fetchNews })(Navigation);
