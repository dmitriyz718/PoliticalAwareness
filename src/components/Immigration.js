import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import { fetchNews } from "../actions/News";
import NewsItem from "./NewsItem";

class Immigration extends Component {
  componentDidMount() {
    this.props.fetchNews("immigration");
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchNews(this.state.key);
  };
  render() {
    const newsItems = this.props.news.map((article) => {
      return (
        <NewsItem />
      );
    });
    return (
      <Container>
        <div>
          <h1>Informed - Immigration</h1>
          <Col>
          {newsItems}
          </Col>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  news: state.news.news,
});
export default connect(mapStateToProps, { fetchNews })(Immigration);
