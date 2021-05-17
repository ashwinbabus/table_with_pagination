import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { selectUser } from "../../redux/selectors";
import ReactJson from "react-json-view";
import "./user.styles.scss";

function UserPage({ user }) {
  const history = useHistory();
  const [view, setView] = useState("TABLE");
  return (
    <div className="userpage__container">

      <div style={{ marginBottom: "10px"}}>

        <div className="userpage__actions">
          <h4 onClick={() => history.push("/")}> &lt; Back</h4>
          <div className="view_change">
            <p onClick={() => setView("TABLE")}>TABLE</p>
            <p onClick={() => setView("JSON")}>JSON</p>
          </div>
        </div>
      </div>
      
      {user && view === "TABLE" ? (
        <table className="userpage__table">
          <thead>
            <tr>
              <th colSpan="2">USER INFO</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ID</td>
              <td>{user.id}</td>
            </tr>
            <tr>
              <td>NAME</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>USERNAME</td>
              <td>{user.username}</td>
            </tr>
            <tr>
              <td>EMAIL</td>
              <td>{user.email}</td>
            </tr>
            <tr>
              <td>ADDRESS</td>
              <td>
                {user.address.suite} <br />
                {user.address.street} <br />
                {user.address.city} <br />
                {user.address.zipcode} <br />
              </td>
            </tr>
            <tr>
              <td>PHONE</td>
              <td> {user.phone} </td>
            </tr>
            <tr>
              <td>WEBSITE</td>
              <td> {user.website} </td>
            </tr>
            <tr>
              <td>COMPANY</td>
              <td> {user.company.name} </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <ReactJson src={user} />
      )}
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  user: selectUser(props.match.params.id)(state),
});

export default connect(mapStateToProps)(UserPage);
