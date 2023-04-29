import axios from "axios";
import React, { useContext, useState } from "react";
import {
  apiUrl,
  LOCAL_STORAGE_TOKEN_NAME,
  UPDATE_USER,
} from "../../../contexts/constants";
import { UserContext } from "../../../contexts/userContext";
import jwt_decode from "jwt-decode";

export default function PostEdit() {
  const {
    userState: { user, users, usersLoading },
    dispatch,
  } = useContext(UserContext);

  // State
  const [updatedUser, setUpdatedUser] = useState({
    userName: "",
    userPassword: "",
    confirmPassword: "",
    userAvatar: "",
  });
  // get data use enter in form
  const onChangeUser = function (event) {
    setUpdatedUser({ ...updatedUser, [event.target.name]: event.target.value });
  };

  // get image user enter in formData
  const onChangeUserImg = function (event) {
    setUpdatedUser({ ...updatedUser, userAvatar: event.target.files[0] });
  };

  const onSubmitUpdate = function (event) {
    event.preventDefault();

    // initialize formdata to store values in state and assign those values to name in input
    const formData = new FormData();
    formData.append("userName", updatedUser.userName);
    formData.append("userPassword", updatedUser.userPassword);
    formData.append("confirmPassword", updatedUser.confirmPassword);
    formData.append("userAvatar", updatedUser.userAvatar);

    // get userID in local storage
    const decoded = jwt_decode(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    if (updatedUser.userPassword == updatedUser.confirmPassword) {
      axios
        .put(`${apiUrl}/update/user/${decoded.userId}`, formData)
        .then((response) => {
          if (updatedUser.userPassword == updatedUser.confirmPassword) {
            if (response.data.success) {
              window.alert("Upload Success");
              dispatch({ type: UPDATE_USER, payload: response.data.user });
              return response.data;
            }
          }
          window.alert("Passwords do not match");
        })

        .catch((error) => {
          return error.response
            ? error.response
            : { success: false, message: "Server error" };
        });
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="postedit post-list post-list-2">
      <div className="post__items">
        <h3 className="title">Edit personal information</h3>
        <div className="left-right">
          <div className="left">
            <div className="left__items">
              <h4>Name</h4>
            </div>
            <div className="left__items">
              <h4>Avatar</h4>
            </div>
            <div className="left__items">
              <h4>Password</h4>
            </div>
            <div className="left__items">
              <h4>Confirm Password</h4>
            </div>
          </div>
          <form onSubmit={onSubmitUpdate} enctype="multipart/form-data">
            <div className="right">
              <div className="right__items">
                <input
                  className="input_info"
                  type="text"
                  name="userName"
                  value={updatedUser.userName}
                  onChange={onChangeUser}
                  placeholder="enter your new name"
                  required
                />
              </div>
              <div className="right__items file-right">
                <input type="file" onChange={onChangeUserImg} />
              </div>
              <div className="right__items">
                <input
                  className="input_info"
                  name="userPassword"
                  value={updatedUser.userPassword}
                  onChange={onChangeUser}
                  type="password"
                  placeholder="enter your new password"
                  required
                />
              </div>
              <div className="right__items">
                <input
                  className="input_info"
                  name="confirmPassword"
                  value={updatedUser.confirmPassword}
                  onChange={onChangeUser}
                  type="password"
                  placeholder="Please confirm your new password"
                  required
                />
              </div>
            </div>
            <div className="submit">
              <button type="submit" className="submit__btn">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
