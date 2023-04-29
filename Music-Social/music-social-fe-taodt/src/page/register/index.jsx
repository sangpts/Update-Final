import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { AuthContext } from "../../contexts/authContext";
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from "../../contexts/constants";
import { Link } from "react-router-dom";

export default function Register() {
  // Context
  const { loadUser } = useContext(AuthContext);

  // local state
  const [register, setRegister] = useState({
    userEmail: "",
    userPassword: "",
    confirmPassword: "",
    userName: "",
    userAvatar: "",
  });

  //Router
  const history = useHistory();

  // get data as user input
  const onChangeRegisterForm = function (event) {
    setRegister({ ...register, [event.target.name]: event.target.value });
  };

  //get file as user input
  const onChangeFileUserForm = function (event) {
    setRegister({ ...register, userAvatar: event.target.files[0] });
  };

  // handle submit event in form with axios
  const userRegister = (e) => {
    e.preventDefault();

    // initialize formdata to store values in state and assign those values to name in input
    const formData = new FormData();
    formData.append("userEmail", register.userEmail);
    formData.append("userPassword", register.userPassword);
    formData.append("confirmPassword", register.confirmPassword);
    formData.append("userName", register.userName);
    formData.append("userAvatar", register.userAvatar);

    axios
      .post(`${apiUrl}/auth/register`, formData)
      .then((response) => {
        if (response.data.success) {
          localStorage.setItem(
            LOCAL_STORAGE_TOKEN_NAME,
            response.data.accessToken
          );
          history.push("/login");
          loadUser();
          return response;
        }
        if (!response.success) {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        if (error.response) return error.response;
        else return { success: false, message: error.message };
      });
  };

  return (
    <div className="register">
      <div className="l-form">
        <form
          onSubmit={userRegister}
          enctype="multipart/form-data"
          className="form"
        >
          <img src="/img/logo1.svg" alt="" />
          <h2 className="form__title">Register</h2>
          <div className="form__div">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              name="userEmail"
              value={register.userEmail}
              required
              onChange={onChangeRegisterForm}
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
              value={register.userPassword}
              required
              onChange={onChangeRegisterForm}
            />
            <label htmlFor className="form__label">
              Password
            </label>
          </div>
          <div className="form__div">
            <input
              type="password"
              className="form__input"
              placeholder=" "
              name="confirmPassword"
              value={register.confirmPassword}
              required
              onChange={onChangeRegisterForm}
            />
            <label htmlFor className="form__label">
              Confirm Password
            </label>
          </div>
          <div className="form__div">
            <input
              type="text"
              className="form__input"
              placeholder=" "
              name="userName"
              value={register.userName}
              required
              onChange={onChangeRegisterForm}
            />
            <label htmlFor className="form__label">
              Your name
            </label>
          </div>
          <div className="form__div">
            <input
              type="file"
              className="form__input"
              onChange={onChangeFileUserForm}
            />
            <label htmlFor className="form__label">
              Your avartar
            </label>
          </div>
          <Link to="/login" id="return">
            Return login page
          </Link>
          <input
            type="submit"
            className="form__button"
            defaultValue="Sign In"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
}
