import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Form from "../components/Form";

const Login = ({ user, setUser, setIsLogin}) => {
  const loggedIn = (e) => {
    setUser(e.target.value);
    console.log(user);
  }

  const [toDashboard, setToDashboard] = useState(false);

  if (user.length >= 3 && toDashboard === true) {
    return <Navigate to="/dashboard" />;
  }

  const afterSubmit = (e) => {
    e.preventDefault();
    setUser(user);

    setToDashboard(true);
  };

  return (
    <>
      <h1>Login</h1>
      {/* <Form afterSubmit={() => navigate("/dashboard")} /> */}
      <Form
        afterSubmit={afterSubmit}
        user={user}
        setUser={setUser}
        setIsLogin={setIsLogin}
        loggedIn={loggedIn}
      />
    </>
  );
};

export default Login;
