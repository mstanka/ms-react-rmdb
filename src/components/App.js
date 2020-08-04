import React from "react";
import { Router } from "@reach/router";

import Header from "./elements/Header";
import Home from "./Home";
import Movie from "./Movie";
import Actor from "./Actor";
import NotFound from "./NotFound";

import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => (
  <>
    <Header />
    <Router>
      <Home path="/" />
      <Movie path="/:movieId" />
      <Actor path="/actor/:actorId" />
      <NotFound default />
    </Router>

    <GlobalStyle />
  </>
);

export default App;
