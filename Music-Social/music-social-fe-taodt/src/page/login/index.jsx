import { notification } from "antd";
import React, { useContext, useState } from "react";
import GoogleLogin from "react-google-login";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

export default function Login() {
  // hook contexts
  const { loginUser } = useContext(AuthContext);

  // Router
  const history = useHistory();

  // use Hook to set new data/ local state
  const [login, setLogin] = useState({
    userEmail: "",
    userPassword: "",
  });

  const [alertLogin, setAlertLogin] = useState(null);

  // When the data changes, the login changes accordingly
  const { userEmail, userPassword } = login;

  // get new data entered by user
  const onchangeLogin = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const userLogin = async (event) => {
    //avoid login according to the original data of html
    event.preventDefault();

    try {
      // call the function AuthContext use this page state
      const loginData = await loginUser(login);
      console.log("loginData_", loginData);
      if (loginData.success) {
        localStorage.setItem("userLogin", JSON.stringify(loginData.user));
        setAlertLogin({ type: "danger", message: loginData.message });
        setTimeout(() => setAlertLogin(null), 5000);
        // localStorage.setItem("user", JSON.stringify(loginData.user));
        notification.success({
          message: loginData.message,
        });
        if (loginData.message == "Admin logged in successfully") {
          history.push("/admin");
        }
        if (loginData.message == "User logged in successfully") {
          history.push("/home");
        }
      } else {
        // localStorage.setItem("user", JSON.stringify(null));
        alert("UserEmail or password incorrect. Please try again");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login">
      <div className="l-form">
        <form onSubmit={userLogin} className="form">
          <img src="/img/logo1.svg" alt="" />
          <h2 className="form__title">Login</h2>
          <div className="form__div">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              name="userEmail"
              value={userEmail}
              required
              onChange={onchangeLogin}
            />
            <label htmlFor className="form__label">
              Email
            </label>
          </div>
          <div className="form__div">
            <input
              type="password"
              className="form__input"
              placeholder=" "
              name="userPassword"
              value={userPassword}
              required
              onChange={onchangeLogin}
            />
            <label htmlFor className="form__label">
              Password
            </label>
          </div>
          <Link to="/register" className="register-btn">
            Click here to register.
          </Link>
          <input
            variant="success"
            type="submit"
            className="form__button"
            defaultValue="Sign In"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
}
