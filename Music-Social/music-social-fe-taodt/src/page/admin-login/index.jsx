import React from "react";

export default function AdminLogin() {
  return (
    <div>
      <div className="login__admin">
        <div className="main">
          <p className="sign" align="center">
            Sign in
          </p>
          <form className="form1">
            <input
              className="un "
              type="text"
              align="center"
              placeholder="Username"
            />
            <input
              className="un"
              type="password"
              align="center"
              placeholder="Password"
            />
            <input type="submit" className="submit" defaultValue="Sign in" />
            <p className="forgot" align="center">
              <a href="#">Forgot Password?</a>
            </p>
            <a href="#"></a>
          </form>
        </div>
        <a href="#"></a>
      </div>
      <a href="#"></a>
    </div>
  );
}
