import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button,
} from "reactstrap";
import { fetchNews } from "../actions/News";

class Health extends Component {
  componentDidMount() {
    this.props.fetchNews("health care");
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
          <Card className="article-card" key={article.id}>
            <CardImg src={article.urlToImage} alt="Card image cap" />
            <CardBody>
              <CardTitle>
                <strong>
                  <a href={article.url} target="_blank">
                    {article.title}
                  </a>
                </strong>
              </CardTitle>
              <CardSubtitle>Author: {article.author}</CardSubtitle>
              <CardSubtitle className="date">
                {article.publishedAt}
              </CardSubtitle>
              <CardText>{article.description}</CardText>
              <Button color="primary" size="lg" active>
                <a href={article.url} target="_blank" id="article-link">
                  View Article
                </a>
              </Button>
            </CardBody>
          </Card>
        </Col>
      );
    });
    return (
      <div>
        <h1>Informed - Health Care</h1>
        <Row>{newsItems}</Row>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  news: state.news.news,
});
export default connect(mapStateToProps, { fetchNews })(Health);
