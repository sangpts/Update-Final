import React, { useContext, useRef, useState } from "react";
import { apiUploadFileMp3, apiUploadImgMp3 } from "../../../contexts/constants";
import { MusicContext } from "../../../contexts/musicContext";
import { PostContext } from "../../../contexts/postContext";
import waringImg from "../component/img/warning.png";
import { FavoriteContext } from "../../../contexts/farvoriteContext";
import { AuthContext } from "../../../contexts/authContext";

export default function Music() {
  // get data musicHome at MusicContext
  const {
    authState: {
      user: { _id: userId },
    },
  } = useContext(AuthContext);
  const {
    musicState: {
      musicHome: { _id, musicFile, musicImg, musicName, musicAuthor, postId,flag },
    },
    getIdMusicHome,
    getIdMusicNext,
    getIdMusicPre,getIdMusicFavorite
  } = useContext(MusicContext);

  const {
    favoriteState: { favorites, favoritesLoading,favoriteHome },
    getFavorites,
    deleteFavorite,
    findIDFavorite,getIdMusicFavoriteNext
  } = useContext(FavoriteContext);
  const {
    postState: { searchpost, posts, postsLoading },
    getPosts,
  } = useContext(PostContext);
  const playBtn = document.querySelector(".player-play");
  const urlMusic = document.querySelector(".progress__song");
  const imgMusic = document.querySelector(".player__img");
  const titleMusic = document.querySelector(".player-title");
  const authorMusic = document.querySelector(".player-author");
  // const [audioIndex, setAudioIndex] = useState(0);
  // const [currentTime, setCurrentTime] = useState(0);
  // const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);

  const handlePausePlayClick = async (e) => {
    if (musicFile == null) {
      alert("Please choose the song you want to listen to!!!");
    } else {
      e.preventDefault();
      if (isPlay || playBtn.classList.contains("fa-pause")) {
        urlMusic.pause();
        playBtn.classList.remove("fa-pause");
      } else {
        urlMusic.play();
        playBtn.classList.add("fa-pause");
        // setmusicFirst(musicHome.musicFile);
      }

      setPlay(!isPlay);
    }
  };
  // xử lý khi tua nhạc
  const progressChange = (e) => {
    const seekTime = (urlMusic.duration / 1000) * e.target.value;
    urlMusic.currentTime = seekTime;
  };

  const handleNext = async (e) => {
    e.preventDefault();
    await getIdMusicNext(postId);
    urlMusic.play();
  };
  const handlePre = async (e) => {
    e.preventDefault();
    await getIdMusicPre(postId);
    urlMusic.play();
  };
  return (
    <section className="music">
      <div className="music__title">
        <h4>Music is playing</h4>
      </div>
      <div className="music__noti">
        <img src={waringImg} alt="" />
        <p>You haven't selected a song, please choose a song to play!</p>
      </div>
      <div className="music__audio">
        <div className="music__audio-postcard">
          <div className="player">
            <img
              src={`${apiUploadImgMp3}${musicImg}`}
              className="player__img"
              alt=""
            />
          </div>
          <h4 className="player-title tilte">{musicName}</h4>
          <span className="player-author author">{musicAuthor}</span>
          <div className="progress">
            <input
              id="progress__input"
              type="range"
              defaultValue={0}
              step={1}
              min={0}
              max={1000}
              onChange={progressChange}
            />
            <audio
              // onLoadedData={handleLoadedData}
              src={`${apiUploadFileMp3}${musicFile}`}
              className=" progress__song"
            />
            {/* <span id="progress__time">0</span> */}
          </div>
        </div>
        <div className="music__audio-btn">
          {
            flag === "post" ? "" : <i onClick={handlePre} className="fa fa-backward player-prev" />
          }
          

          <i onClick={handlePausePlayClick} className="fa fa-play player-play" />


          {
            flag === "post" ? "" : <i onClick={handleNext} className="fa fa-forward player-next" />
          }
        </div>
      </div>
    </section>
  );
}
