import React, { useContext, useState } from "react";
import { apiUploadFileMp3, apiUploadImgMp3 } from "../../../contexts/constants";
import { MusicContext } from "../../../contexts/musicContext";

export default function MusicFooter() {
  // get data musicHome at MusicContext
  const {
    musicState: {
      musicHome: { musicFile, musicImg, musicName, musicAuthor },
    },
  } = useContext(MusicContext);

  const playBtn = document.querySelector(".player-play");
  const urlMusic = document.querySelector(".progress__song");
  // const [audioIndex, setAudioIndex] = useState(0);
  // const [currentTime, setCurrentTime] = useState(0);
  // const [duration, setDuration] = useState(0);
  const [isPlay, setPlay] = useState(false);

  const handlePausePlayClick = async (e) => {
    if (musicFile == null) {
      alert("Please choose the song you want to listen to!!!");
    } else {
      e.preventDefault();

      if (isPlay) {
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
  return (
    <section className="music-footer">
      <div className="music-notify">
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
          <div className="name-author">
            <h4 className="player-title tilte">{musicName}</h4>
            <span className="player-author author">{musicAuthor}</span>
          </div>
          <div className="progress">
            <input
              id="progress__input"
              type="range"
              defaultValue={0}
              step={1}
              min={0}
              max={100}
            />
            <audio
              src={`${apiUploadFileMp3}${musicFile}`}
              className=" progress__song"
            />
            {/* <span id="progress__time">0</span> */}
          </div>
        </div>
        <div className="music__audio-btn">
          <i className="fa fa-backward player-prev" />
          <i
            onClick={handlePausePlayClick}
            className="fa fa-play player-play"
          />
          <i className="fa fa-forward player-next" />
        </div>
      </div>
    </section>
  );
}
