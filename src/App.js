import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Main from "./components/MainPage/Main";
import Cabinet from "./components/Cabinet";
import Default from "./components/Default";
import { connect } from "react-redux";

const App = ({ token }) => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Registration} />
          <Route exact path="/login" component={Login} />
          {token ? <Route exact path="/main" component={Main} /> : null}
          {token ? <Route exact path="/cabinet" component={Cabinet} /> : null}
          <Route component={Default} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => {
  return {
    token: state.loginR.token
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
