import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { fetchNews } from "../actions/News";

class Navigation extends Component {
  render() {
    return (
      <Navbar className="m-2" id="nav">
        <Nav className="mr-auto p-2">
          <Link to="/health">
            <Button variant="outline-primary">Health Care</Button>
          </Link>
          <Link to="/immigration">
            <Button variant="outline-primary">Immigration</Button>
          </Link>
          <Link to="/voting">
            <Button variant="outline-primary">Voting</Button>
          </Link>
          <Link to="/climate">
            <Button variant="outline-primary">Climate</Button>
          </Link>
          <Link to="/education">
            <Button variant="outline-primary">Education</Button>
          </Link>
          <Link to="/foreign">
            <Button variant="outline-primary">Foreign Policy</Button>
          </Link>
          <Link to="/economy">
            <Button variant="outline-primary">Economy</Button>
          </Link>
          <Link to="/guns">
            <Button variant="outline-primary">Gun Policy</Button>
          </Link>
          <Link to="/criminal">
            <Button variant="outline-primary">Criminal Justice</Button>
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
      </Navbar>
    );
  }
}
const mapStateToProps = (state) => ({
  news: state.news.news,
});
export default connect(mapStateToProps, { fetchNews })(Navigation);
