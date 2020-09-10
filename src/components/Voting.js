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
class Voting extends Component {
  componentDidMount() {
    this.props.fetchNews("voting news");
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
          <Col xs="3">
            <Card key={article.id}>
              <CardImg
                src={article.urlToImage}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>
                  <strong>{article.title}</strong>
                </CardTitle>
                <CardSubtitle>Author: {article.author}</CardSubtitle>
                <CardSubtitle className="date">{article.publishedAt}</CardSubtitle>
                <CardText>{article.description}</CardText>
              </CardBody>
            </Card>
          </Col>
      );
    });
    return (
        <div>
          <h1>Informed - Voting</h1>
          <Row>
            {newsItems}
          </Row>
        </div>
    );
  }
}
const mapStateToProps = (state) => ({
  news: state.news.news,
});
export default connect(mapStateToProps, { fetchNews })(Voting);
