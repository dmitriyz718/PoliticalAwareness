import React, { Component } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Trending from "./components/Trending";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
import Routes from "./config/Routes";
import { Provider } from "react-redux";
import { Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Navigation />
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
