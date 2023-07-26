// eslint-disable-next-line no-unused-vars
import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  return (
    <div className="container">
      <div className="p-5 m-3">
        <h1 className="py-3">See Your User Details</h1>
        <h4>Name: {user.name}</h4>
        <p>Email: {user.email}</p>
        <p>ID: {user.id}</p>
        <p>Address: {user.address.street}</p>
        <p>Phone: {user.phone}</p>
        <p>Web: {user.website}</p>
      </div>
    </div>
  );
};

export default UserDetails;
