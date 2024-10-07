import { useState, useEffect } from "react";
import React from 'react';

function UserList() {
  const [users, setUsers] = useState('');

  useEffect(() => {
    console.log("running useEffect");
    let ignore = false; // flag to allow ignoring of the fetch result

    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((json) => { if (!ignore) setUsers(json);
      });

    return () => {
      ignore = true;
      console.log("cleanup");
    };
  }, []);

  return (
    <div className="UserList componentBox">
      <h3>User List</h3>
      <ul>
        {users ? users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong><br />
            Email: {user.email}<br />
            Phone: {user.phone}
          </li>
        )) : <h2>"Loading"</h2>}
      </ul>
    </div>
  )
}

export default UserList;
