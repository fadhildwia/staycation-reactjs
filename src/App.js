import React from "react";
import "./styles/index.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "views/LandingPage";
import Example from "views/Example";
import DetailsPage from "views/DetailsPage";
import Checkout from "views/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={LandingPage} />
        <Route path="/properties/:id" exact component={DetailsPage} />
        <Route path="/example" exact component={Example} />
        <Route path="/checkout" exact component={Checkout} />
      </Router>
    </div>
  );
}

export default App;
