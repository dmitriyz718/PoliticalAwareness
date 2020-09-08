import React, { Component } from "react";
import { Container } from "reactstrap";
import { connect } from "react-redux";
import { fetchNews } from "../actions/News";
class Landing extends Component {
  componentDidMount() {
    this.props.fetchNews();
  }
  render() {
    return (
      <Container>
        <div>
          <h1>Landing Page</h1>
        </div>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  news: state.news.news,
});
export default connect(mapStateToProps, { fetchNews })(Landing);
