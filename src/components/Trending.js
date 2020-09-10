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
import { trendingNews } from "../actions/News";
class Trending extends Component {
  state = {
    key: "",
  };
  componentDidMount() {
    this.props.trendingNews();
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.fetchNews(this.state.key);
  };
  render() {
    const displayNews = this.props.news.trendingNews
      .slice(0, 5)
      .map((article) => {
        return (
          <Row>
            <Col xs="auto">
              <Card key={article.id}>
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
                  <CardText>{article.description}</CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        );
      });
    return (
        <div>
          <h1>Trending Now</h1>
          {displayNews}
        </div>
    );
  }
}
const mapStateToProps = (state) => ({
  news: state.news,
});
export default connect(mapStateToProps, { trendingNews })(Trending);
