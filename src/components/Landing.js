import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { fetchNews } from "../actions/News";
class Landing extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }
  render() {
    const newsItems = this.props.news.map((article) => {
      return (
        <div key={article.id}>
          <h2>Title: {article.title}</h2>
          <p>Description: {article.description}</p>
          <p>
            <strong>Author: </strong>
            {article.author}
          </p>
        </div>
      );
    });
    return (
      <Container>
        <div>
          <h1>Landing Page</h1>
          {newsItems}
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  news: state.news.news,
});
export default connect(mapStateToProps, { fetchNews })(Landing);
