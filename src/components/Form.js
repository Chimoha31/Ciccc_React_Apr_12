import React from "react";

const Form = ({
  afterSubmit,
  user,
  setUser,
  setIsLogin,
  user2,
  setUser2,
  setIsResister,
  loggedIn,
}) => {
  const clickHandle = () => {
    setIsLogin(true);
  };
  return (
    <form onSubmit={afterSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Enter username"
        onChange={loggedIn}
      />
      <input type="password" name="password" placeholder="Enter password" />
      <button type="submit" onClick={clickHandle}>
        Sign Up
      </button>
    </form>
  );
};

export default Form;
