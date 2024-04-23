import React from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
  console.log(users);
  return (
    <div>
      <h2>Users page</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Created At</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
                users.map(user => <tr key={user._id} className="hover">
                <th>1</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td><button className="btn btn-sm btn-error text-white">Delete</button></td>
              </tr>)
            }
            
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
