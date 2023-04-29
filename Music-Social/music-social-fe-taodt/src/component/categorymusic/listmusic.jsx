import React, { useContext } from "react";
import { apiUploadFileMp3, apiUploadImgMp3 } from "../../contexts/constants";
import { MusicContext } from "../../contexts/musicContext";
import { Link } from "react-router-dom";

export default function ListMusic({
  music: { _id, musicName, musicAuthor, musicImg, musicFile },
}) {
  const { findIDMusic } = useContext(MusicContext);
  function createPost(musicId) {
    const popupCreate = document.querySelector(".create-popup");
    popupCreate.classList.add("active");
    findIDMusic(musicId);
  }

  return (
    <div className="like">
      <img className="img" src={`${apiUploadImgMp3}${musicImg}`} alt="" />
      <h5 className="name">{musicName}</h5>
      <h5 className="author">{musicAuthor}</h5>
      <audio className="audio" src={`${apiUploadFileMp3}${musicFile}`} />
      <button className="item-create" onClick={createPost.bind(this, _id)}>
        Create post
      </button>
      {/* <Link
        to={`${apiUploadFileMp3}${musicFile}`}
        className="item-create"
        target="_blank"
        download={musicFile}
      >
        Download
      </Link> */}
      <a
        href={`${apiUploadFileMp3}${musicFile}`}
        className="item-create"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Download
      </a>
    </div>
  );
}
