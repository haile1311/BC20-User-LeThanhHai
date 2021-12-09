import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  renderListUser = () => {
    const {listUser} = this.props;
    return listUser.map((user)=> {
      return <UserItem key={user.id} user={user} addUser = {this.props.addUser}/>
    })
  }
  renderTable = () => {
    return this.props.listUser.map((user)=>{
      return (
        <tr key = {user.id}>
          <td>{user.fullname}</td>
          <td>{user.username}</td>
          <td>{user.email}</td>
          <td>{user.phoneNumber}</td>
          <td>{user.type}</td>
          <td>
            <button className = "btn btn-danger" onClick = {()=>{
              this.props.deleteUser(user)
            }}>Delete</button>
            <button className = "btn btn-success">Edit</button>
          </td>
        </tr>
      )
    })
  }

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.renderTable()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Users;
