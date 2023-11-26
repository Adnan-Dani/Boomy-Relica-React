import React from "react";
import { useLocation } from "react-router-dom";

const Release = () => {
  const location = useLocation();
  const data = location.state?.data;
  console.log(data)
  return (<div>Release</div>);
};

export default Release;
