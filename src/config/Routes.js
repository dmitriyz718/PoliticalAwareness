import React from "react";
import { Switch, Route } from "react-router-dom";
import Health from "../components/Health";
import Landing from "../components/Landing";
import Immigration from "../components/Immigration";
import Voting from "../components/Voting";
import Climate from "../components/Climate";
import Education from "../components/Education";
import Foreign from "../components/Foreign";
import Criminal from "../components/Criminal";
import Elections from "../components/Elections";
import Guns from "../components/Guns";
import Economy from "../components/Economy";
export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/health" component={Health} />
      <Route path="/immigration" component={Immigration} />
      <Route path="/voting" component={Voting} />
      <Route path="/climate" component={Climate} />
      <Route path="/education" component={Education} />
      <Route path="/foreign" component={Foreign} />
      <Route path="/guns" component={Guns} />
      <Route path="/criminal" component={Criminal} />
      <Route path="/elections" component={Elections} />
      <Route path="/economy" component={Economy} />
    </Switch>
  );
}
