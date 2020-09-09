import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Trending from "./components/Trending";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import Routes from "./config/Routes";
import { Provider } from "react-redux";
import { Container, Form, Input, Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div class="global-search">
            <h1 class="logo">Informed.</h1>
              <Form id="search" onSubmit={this.onSubmit}>
                <Input
                  type="text"
                  onChange={this.onChange}
                  id="key"
                  name="key"
                  placeholder="What would you like to learn about today?"
                ></Input>
                <Button color="primary" size="lg" active>
                  Search
                </Button>
              </Form>
          </div>
        <Navigation />
          <Container>
            <div div className="App">
              <Routes />
              <Trending />
            </div>
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
