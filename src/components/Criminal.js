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
class Criminal extends Component {
  componentDidMount() {
    this.props.fetchNews("criminal justice");
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
        <Row>
          <Col xs="auto">
            <Card key={article.id}>
              <CardImg
                top
                width="100%"
                src={article.urlToImage}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                  <strong>{article.title}</strong>
                </CardTitle>
                <CardSubtitle>Author: {article.author}</CardSubtitle>
                <CardText>{article.description}</CardText>
                <Button color="primary" size="lg" active>
                  <a href={article.url} target="_blank" id="article-link">
                    View Article
                  </a>
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      );
    });
    return (
      <Container>
        <div>
          <h1>Informed - Criminal Justice</h1>
          {newsItems}
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  news: state.news.news,
});
export default connect(mapStateToProps, { fetchNews })(Criminal);
