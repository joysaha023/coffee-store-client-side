import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  
  const handleDelete = id =>{
    //make sure user is confirmed to delete
    fetch(`https://coffee-store-server-side-blue.vercel.app/user/${id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        if (data.deletedCount > 0){
            console.log('deleted successfully');
            //remove the user from the UI
            const remainingUser = users.filter(user => user._id !== id)
            setUsers(remainingUser)
        }
    })
  }

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
              <th>Logged In</th>
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
                <td>{user.lastLoggedAt}</td>
                <td><button onClick={() => handleDelete(user._id)} className="btn btn-sm btn-error text-white">Delete</button></td>
              </tr>)
            }
            
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
