import React, { Component } from "react";
import axios from "axios";

class User extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        // console.log(res.data)
        this.setState({
          users: res.data
        });
      })

      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Inside User</h1>
        {this.state.users.map((user, index) => {
          return (
            <div>
              <table className="table table-striped table-bordered table-hover table-condensed">
                <tbody>
                  <tr>
                    <th>User Id</th>
                    <th>Tittle </th>
                  </tr>
                  <tr>
                    <td> {user.id}</td>
                    <td> {user.title}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    );
  }
}

export default User;
