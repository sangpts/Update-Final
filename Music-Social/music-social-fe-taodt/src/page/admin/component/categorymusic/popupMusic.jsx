import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { apiUrl, UPDATE_MUSIC } from "../../../../contexts/constants";
import { MusicContext } from "../../../../contexts/musicContext";
// import Ripple from "@bit/joshk.react-spinners-css.ripple";
import { useRef } from "react";

export default function PopupMusic() {
  // close popup
  function outPopupMusic() {
    const popUpEdit = document.querySelector(".edit-popup");
    popUpEdit.classList.remove("active");
  }

  const {
    musicState: {
      music: { _id },
    },
    dispatch,
  } = useContext(MusicContext);

  // local state
  const [updateMusic, setupdateMusic] = useState({
    musicName: "",
    musicAuthor: "",
    musicImg: "",
    musicFile: "",
    musicCategory: "",
  });

  // get data as user input
  const onChangeMusicForm = function (event) {
    setupdateMusic({ ...updateMusic, [event.target.name]: event.target.value });
  };

  //get img file as user input
  const onChangeFileImgForm = function (event) {
    setupdateMusic({ ...updateMusic, musicImg: event.target.files[0] });
  };

  //get mp3 file as user input
  const onChangeMp3Form = function (event) {
    setupdateMusic({ ...updateMusic, musicFile: event.target.files[0] });
  };

  const onSubmitUpdate = function (event) {
    event.preventDefault();

    // initialize formdata to store values in state and assign those values to name in input
    const formData = new FormData();
    formData.append("musicName", updateMusic.musicName);
    formData.append("musicAuthor", updateMusic.musicAuthor);
    formData.append("musicImg", updateMusic.musicImg);
    formData.append("musicFile", updateMusic.musicFile);
    formData.append("musicCategory", updateMusic.musicCategory);

    axios

      .put(`${apiUrl}/music/update/${_id}`, formData)

      .then((response) => {
        if (response.data.success) {
          dispatch({ type: UPDATE_MUSIC, payload: response.data.music });
          return response.data;
        }
      })
      .catch((error) => {
        return error.response ? error.response : { success: false, message: "Server error" };
      });
  };
  return (
    <div className="edit-popup">
      <div className="post__items">
        <div id="outbtn" onClick={outPopupMusic}>
          X
        </div>
        <h3 className="title">Update music</h3>
        <div className="left-right">
          <div className="left">
            <div className="left__items">
              <h4>Name Music</h4>
            </div>
            <div className="left__items">
              <h4>Image</h4>
            </div>
            <div className="left__items">
              <h4>Author</h4>
            </div>
            <div className="left__items">
              <h4>Link</h4>
            </div>
            <div className="left__items">
              <h4>Category</h4>
            </div>
          </div>
          <form onSubmit={onSubmitUpdate} enctype="multipart/form-data">
            <div className="right">
              <div className="right__items">
                <input
                  className="input_info"
                  type="text"
                  placeholder="enter name's music"
                  name="musicName"
                  value={updateMusic.musicName}
                  onChange={onChangeMusicForm}
                  required
                />
              </div>
              <div className="right__items">
                <input type="file" onChange={onChangeFileImgForm} required />
              </div>
              <div className="right__items">
                <input
                  className="input_info"
                  type="text"
                  placeholder="enter author's music"
                  name="musicAuthor"
                  value={updateMusic.musicAuthor}
                  onChange={onChangeMusicForm}
                  required
                />
              </div>
              <div className="right__items">
                <input type="file" onChange={onChangeMp3Form} required />
              </div>
              <div className="right__items checkbox">
                <div className="checkbox">
                  <select name="musicCategory" onChange={onChangeMusicForm} required>
                    <option>choose music genre</option>
                    <option value="acoustic">acoustic</option>
                    <option value="cinematic">cinematic</option>
                    <option value="edm">edm</option>
                    <option value="electronic">electronic</option>
                    <option value="pop">pop</option>
                    <option value="jazz">jazz</option>
                    <option value="urban">urban</option>
                    <option value="rock">rock</option>
                    <option value="other">other</option>
                  </select>
                </div>
              </div>
              <div className="submit">
                <input type="submit" className="submit__btn" value="Save" defaultValue="Upload" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
