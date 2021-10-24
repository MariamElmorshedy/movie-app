import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import SearchPage from "./Components/Movies/SearchPage";
import { Redirect, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div className="App">
      <Route path="/login" component={Login} exact />
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>

      <Route path="/Home" component={Home} />
      <Route path="/SearchPage" component={SearchPage} />
    </div>
  );
};

export default App;
