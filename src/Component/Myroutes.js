import React from "react";
import { Link } from "react-router-dom";
const Myroutes = () => {
  return (
    <div>
      <Link to="/">Home</Link> |<Link to="/about">About</Link> |
      <Link to="/contact">Contact</Link> |<Link to="/users">Users</Link>
    </div>
  );
};
export default Myroutes;
