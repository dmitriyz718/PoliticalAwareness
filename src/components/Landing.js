import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Button, Row, Col, Form, Input } from "reactstrap";
import { fetchNews } from "../actions/News";
import Trending from "./Trending";
import NewsItem from "./NewsItem";
import Navigation from "./Navigation";

class Landing extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <NewsItem />
          </Col>
          <Col>
            <Trending />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  news: state.news.news,
});
export default connect(mapStateToProps, { fetchNews })(Landing, Trending);
