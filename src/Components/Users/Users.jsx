/* eslint-disable no-unused-vars */
import React from "react";
import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  // console.log(users);

  return (
    <div className="container my-5">
      <h1 className="py-2">I have lot of Friends {users.length}</h1>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {users.map((user) => (
          <User key={user?.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
