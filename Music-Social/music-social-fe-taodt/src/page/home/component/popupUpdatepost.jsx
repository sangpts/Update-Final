import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { ADD_POST, apiUrl, UPDATE_POST } from "../../../contexts/constants";

import { PostContext } from "../../../contexts/postContext";

export default function PopupUpdatePost() {
  // close popup
  function outPopupMusic() {
    const popUpEdit = document.querySelector(".edit-popup");
    popUpEdit.classList.remove("active");
  }
  // change state context post and get data
  const { dispatch } = useContext(PostContext);

  const {
    postState: {
      post: { _id },
    },
  } = useContext(PostContext);

  // local state
  const [inputPost, setinputPost] = useState({
    postContent: "",
  });

  // get data as user input
  const onChangePost = (event) => {
    setinputPost({ ...inputPost, [event.target.name]: event.target.value });
  };

  const createPost = (e) => {
    e.preventDefault();

    // initialize formdata to store values in state and assign those values to name in input
    const formData = new FormData();

    formData.append("postContent", inputPost.postContent);

    axios
      .put(`${apiUrl}/posts/update/${_id}`, formData)
      .then((response) => {
        if (response.data.success) {
          dispatch({ type: UPDATE_POST, payload: response.data.post });

          return response.data;
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
    <div className="edit-popup">
      <div className="post__items">
        <div id="outbtn" onClick={outPopupMusic}>
          X
        </div>
        <h3 className="title">Edit post</h3>
        <form onSubmit={createPost} enctype="multipart/form-data">
          <div className="brise-text">
            <textarea
              name="postContent"
              id=""
              cols="30"
              rows="10"
              value={inputPost.postContent}
              onChange={onChangePost}
              required
            ></textarea>

            <label>Enter the new content you want to edit</label>
          </div>
          <div className="submit">
            <input
              type="submit"
              className="submit__btn"
              value="Create"
              defaultValue="Upload"
              onClick={outPopupMusic}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
