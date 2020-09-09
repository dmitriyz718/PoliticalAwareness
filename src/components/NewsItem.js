import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { fetchNews } from "../actions/News";

class NewsItem extends Component {
  state = {
    key: "",
  };

  componentDidMount() {
    this.props.fetchNews();
  };

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
      )
    })
    return (
      <Col>
        {newsItems}
      </Col>
    )
  }
}

const mapStateToProps = (state) => ({
  news: state.news.news,
});
export default connect(mapStateToProps, { fetchNews })(NewsItem);
