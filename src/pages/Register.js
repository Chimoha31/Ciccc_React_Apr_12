import React, { useState } from "react";
import { Navigate } from "react-router-dom";
// import { useNavigate, Navigate } from "react-router-dom";
import Form from "../components/Form";

const Register = () => {

  // const afterSubmit = (e) => {
  //   e.preventDefault();
  //   setUser2(user2);

  //   setToDashboard(true);
  // };

  // const navigate = useNavigate();
  const [toDashboard, setToDashboard] = useState(false);
  if (toDashboard === true) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <>
      <h1>Register</h1>
      {/* <Form afterSubmit={() => navigate("/dashboard")} /> */}
      <Form />
    </>
  );
};

export default Register;
