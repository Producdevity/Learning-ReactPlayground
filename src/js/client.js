import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory, browserHistory  }  from "react-router";

import Archives from "./pages/Archives";
import Featured from "./pages/Featured";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";
import Todos from "./pages/Todos";

const app = document.getElementById('app');

ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Todos}></IndexRoute>
        <Route path="todos(/:todo)" name="todos" component={Todos}></Route>
        <Route path="archives(/:article)" name="archives" component={Archives}></Route>
        <Route path="settings" name="settings" component={Settings}></Route>
      </Route>
    </Router>,
    app);
