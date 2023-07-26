/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import watch from "../../assets/s-watch.jpg";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, username } = user;
  return (
    <div>
      <div className="col">
        <div className="card">
          <img src={watch} className="card-img-top" alt="s-watch" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{email}</p>
            <p className="card-text">{username}</p>
          </div>
          <Link to={`/user/${id}`}>
            <button className="btn btn-outline-secondary w-100">
              Show Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
