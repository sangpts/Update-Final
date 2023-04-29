import axios from "axios";
import React, { useContext, useState } from "react";
import { ADD_MUSIC, apiUrl } from "../../../contexts/constants";
import { MusicContext } from "../../../contexts/musicContext";

import CategoryMusicAdmin from "./categoryMusicAdmin";

export default function MusicPage() {
  const { dispatch } = useContext(MusicContext);

  // local state
  const [uploadMusic, setuploadMusic] = useState({
    musicName: "",
    musicAuthor: "",
    musicImg: "",
    musicFile: "",
    musicCategory: "",
  });

  // get data as user input
  const onChangeMusicForm = function (event) {
    setuploadMusic({ ...uploadMusic, [event.target.name]: event.target.value });
  };

  //get img file as user input
  const onChangeFileImgForm = function (event) {
    setuploadMusic({ ...uploadMusic, musicImg: event.target.files[0] });
  };

  //get mp3 file as user input
  const onChangeMp3Form = function (event) {
    setuploadMusic({ ...uploadMusic, musicFile: event.target.files[0] });
  };

  // handle submit event in form with axios
  const musicUploadForm = (e) => {
    e.preventDefault();

    // initialize formdata to store values in state and assign those values to name in input
    const formData = new FormData();
    formData.append("musicName", uploadMusic.musicName);
    formData.append("musicAuthor", uploadMusic.musicAuthor);
    formData.append("musicImg", uploadMusic.musicImg);
    formData.append("musicFile", uploadMusic.musicFile);
    formData.append("musicCategory", uploadMusic.musicCategory);

    axios
      .post(`${apiUrl}/music/upload`, formData)
      .then((response) => {
        if (response.data.success) {
          window.alert("Upload Success");
          dispatch({ type: ADD_MUSIC, payload: response.data.post });

          alert(response.data.message);

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
    <div className="music-content menu-bar">
      <div className="overview-boxes">
        <div className="post__items">
          <h3 className="title">Upload music</h3>
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
            <form
              id="upload"
              onSubmit={musicUploadForm}
              enctype="multipart/form-data"
            >
              <div className="right">
                <div className="right__items">
                  <input
                    className="input_info"
                    type="text"
                    placeholder="enter the name of the song"
                    name="musicName"
                    value={uploadMusic.musicName}
                    onChange={onChangeMusicForm}
                  />
                </div>
                <div className="right__items">
                  <input
                    type="file"
                    name="musicImg"
                    onChange={onChangeFileImgForm}
                  />
                </div>
                <div className="right__items">
                  <input
                    className="input_info"
                    type="text"
                    placeholder="enter your new phone"
                    name="musicAuthor"
                    value={uploadMusic.musicAuthor}
                    onChange={onChangeMusicForm}
                  />
                </div>
                <div className="right__items">
                  <input
                    type="file"
                    name="musicFile"
                    onChange={onChangeMp3Form}
                  />
                </div>

                <div className="checkbox__item">
                  <select name="musicCategory" onChange={onChangeMusicForm}>
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

                <div className="submit">
                  <input
                    type="submit"
                    className="submit__btn"
                    value="Add"
                    defaultValue="Upload"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="overview-boxes">
        <CategoryMusicAdmin />
      </div>
    </div>
  );
}
