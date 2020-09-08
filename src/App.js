import React, { Component } from "react";
import "./App.css";
import Landing from "./components/Landing";
import store from "./store";
import { Provider } from "react-redux";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div div className="App">
          <Landing />
        </div>
      </Provider>
    );
  }
}

export default App;
