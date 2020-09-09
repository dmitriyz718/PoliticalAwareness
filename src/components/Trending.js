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
    const displayNews = this.props.news.trendingNews.map((article) => {
      return (
        <Row>
          <Col xs="auto">
            <Card
              id={article.id}
              style={{
                height: "40%",
                width: "40%",
                border: "solid",
                margin: "2rem",
              }}
            >
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
                <CardSubtitle>Athor: {article.author}</CardSubtitle>
                <CardText>{article.description}</CardText>
                <Button color="primary" size="lg" active>
                  View Article
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
          <h1>Informed - Trending Now</h1>
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
          {displayNews}
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  news: state.news,
});
export default connect(mapStateToProps, { trendingNews })(Trending);
