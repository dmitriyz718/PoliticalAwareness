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
  Form,
  Input,
} from "reactstrap";
import { fetchNews } from "../actions/News";
import Trending from "./Trending";


class Landing extends Component {
  state = {
    key: "",
  };
  componentDidMount() {
    this.props.fetchNews();
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
        <Card id={article.id}>
          <CardImg
            src={article.urlToImage}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <strong>{article.title}</strong>
            </CardTitle>
            <CardSubtitle>Athor: {article.author}</CardSubtitle>
            <CardText>{article.description}</CardText>
            <Button color="primary" size="lg" active>
              View Article
            </Button>
          </CardBody>
        </Card>
      );
    });
    return (
      <Container>
        <div>
          <h1>News Dash</h1>
          <Form onSubmit={this.onSubmit}>
            <Input
              type="text"
              onChange={this.onChange}
              id="key"
              name="key"
              placeholder="keywords"
            ></Input>
            <Button color="primary" size="lg" active>
              Search
            </Button>
          </Form>
          <Row>
            <Col xs="auto">
              {newsItems}
            </Col>
            <Col>
              <Trending/>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  news: state.news.news,
});
export default connect(mapStateToProps, { fetchNews })(Landing, Trending);
