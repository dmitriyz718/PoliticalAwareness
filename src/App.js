import React, { Component } from "react";
import "./App.css";
import Landing from "./components/Landing";
import Trending from "./components/Trending";
import store from "./store";
import { Provider } from "react-redux";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div div className="App">
          <Landing />
          <Trending />
        </div>
      </Provider>
    );
  }
}

export default App;
