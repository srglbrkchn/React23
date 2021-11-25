import React from "react";

function Form(props) {
  const registered = props.userIsRegistered;

  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <input type="password" placeholder="Confirm Password" />
      <button type="submit">{registered ? "Login" : "Register"} </button>
    </form>
  );
}

export default Form;
