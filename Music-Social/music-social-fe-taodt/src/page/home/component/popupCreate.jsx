import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { ADD_POST, apiUrl } from "../../../contexts/constants";
import { MusicContext } from "../../../contexts/musicContext";
import { PostContext } from "../../../contexts/postContext";

export default function PopupCreate() {
  // close popup
  function outPopupMusic() {
    const popUpEdit = document.querySelector(".create-popup");
    popUpEdit.classList.remove("active");
  }
  // change state context post and get data
  const { dispatch } = useContext(PostContext);
  const {
    authState: {
      user: { _id: userId },
    },
  } = useContext(AuthContext);
  const {
    musicState: {
      music: { _id: musicId },
    },
  } = useContext(MusicContext);
  // save the musicId value in a new variable

  // local state
  const [inputPost, setinputPost] = useState({
    user: userId,
    postContent: "",
    music: musicId,
  });

  const getMusicId = musicId;

  // get data as user input
  const onChangePost = (event) => {
    setinputPost({ ...inputPost, [event.target.name]: event.target.value });
  };

  const createPost = (e) => {
    e.preventDefault();
    // initialize formdata to store values in state and assign those values to name in input
    const formData = new FormData();
    formData.append("user", inputPost.user);
    formData.append("postContent", inputPost.postContent);
    formData.append("music", getMusicId);
    axios
      .post(`${apiUrl}/posts`, formData)
      .then((response) => {
        if (response.data.success) {
          dispatch({ type: ADD_POST, payload: response.data.post });

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
    <div className="create-popup">
      <div className="post__items">
        <div id="outbtn" onClick={outPopupMusic}>
          X
        </div>
        <h3 className="title">create your new post</h3>
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

            <label>
              How do you feel about the song or how are you feeling right now?
            </label>
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
