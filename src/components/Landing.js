import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
} from "reactstrap";
import { fetchNews } from "../actions/News";
import Trending from "./Trending";
import NewsItem from "./NewsItem";

class Landing extends Component {
  render() {
    return (
      <Container>
        <Row>
            <NewsItem/>
          <Col xs="3">
            <Trending/>
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
