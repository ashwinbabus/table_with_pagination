import React, { useState , useCallback } from "react";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectLoading, selectUsers } from "../../redux/selectors";
import Pagination from "../pagination/pagination.component";
import "./table.styles.scss";
import deleteIcon from '../../assets/delete.png';
import openIcon from "../../assets/open.png";
import { useHistory } from "react-router";
import Actions from "../../redux/action.types";



function Table({ users, loading }) {
  const [numOfRows, setNumOfRows] = useState(5);

  const [currPage, setCurrPage] = useState(1);

  const lastUserIndex = currPage * numOfRows;

  const firstUserIndex = lastUserIndex - numOfRows;

  const sliceUsers = useCallback(
    () => {
      return users.slice(firstUserIndex, lastUserIndex)
    },
    [users,firstUserIndex,lastUserIndex],
  )

  const new_users = sliceUsers();

  const history = useHistory()

  const dispatch = useDispatch();

  return (
    <div className="main__table">
      {loading ? (
        <h1>loading</h1>
      ) : (
        <table>
          <thead  >
            <tr className="head__row"  >
              <th>#</th>
              <th>EMAIL</th>
              <th>DISPLAY NAME</th>
              <th>USERNAME</th>
              <th>ADDRESS</th>
              <th>PHONE</th>
              <th>WEBSITE</th>
              <th>COMPANY</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {new_users.map(user => (
              <tr key={user.id} className="user__info" onClick={() => history.push(`/${user.id}`)} >
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                  {user.address.suite} <br />
                  {user.address.street} <br />
                  {user.address.city} <br />
                  {user.address.zipcode} <br />
                </td>
                <td>{user.phone}</td>
                <td>{user.website}</td>
                <td>{user.company.name}</td>
                <td  className="actions">
                  <div>
                    <img src={openIcon} alt="open" onClick={() => history.push(`/${user.id}`)} title="OPEN" />
                    <img src={deleteIcon} alt="delete" onClick={() => dispatch({type : Actions.DELETE_ROW , id : user.id })} title="DELETE" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>

          <tbody style={{background : "#F5F5F5" }}>
            <tr>
              <td colSpan="5" style={{borderRight : "none"}} >
                <div className="row__number">
                  <select
                    name="rows_select"
                    id=""
                    onChange={(e) => {setNumOfRows(e.target.value);  }}
                    value = {numOfRows}
                  >
                    {users.map((user, ind) => (
                      <option key={user.id} value={ind + 1}   >
                        {ind + 1}
                      </option>
                    ))}
                  </select>
                  <p>Number of rows</p>
                </div>
              </td>

              <td colSpan="4"  style={{borderLeft : "none"}}>
                <div className="pagination">
                  <Pagination
                    numOfUsers={users.length}
                    numOfRows={numOfRows}
                    setCurrPage={setCurrPage}
                    currPage={currPage}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  users: selectUsers,
  loading: selectLoading,
});

export default connect(mapStateToProps)(Table);
