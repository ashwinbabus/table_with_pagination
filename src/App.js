import "./App.css";

import Container from "./components/container/container.component";
import { Route, Switch } from "react-router-dom";
import UserPage from "./components/user-page/user.component";
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDataStart, fetchDataSuccess } from "./redux/actions";
import "./components/page-not-found/pnf.page";
import PNF from "./components/page-not-found/pnf.page";

function App({ fetchUsers, fetchUserSuccess }) {
  useEffect(() => {
    let users = localStorage.getItem("users");
    if (users) fetchUserSuccess(JSON.parse(users));
    else fetchUsers();
  });
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Container} />
        <Route exact path="/:id" component={UserPage} />
        <Route> <PNF /> </Route>
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  fetchUsers: () => dispatch(fetchDataStart()),
  fetchUserSuccess: (users) => dispatch(fetchDataSuccess(users)),
});

export default connect(null, mapDispatchToProps)(App);
