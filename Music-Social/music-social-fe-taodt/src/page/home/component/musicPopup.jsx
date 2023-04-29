import React from "react";

export default function MusicPopup() {
  return (
    <section className="music-popup">
      <div className="music__title">
        <div className="icon__out">
          <img src="/img/arrow-down.svg" alt="" />
        </div>
        <h4>Music is playing</h4>
      </div>
      <div className="music__audio">
        <div className="music__audio-postcard">
          <div className="player">
            <img src="/img/img_music/2.jpg" className="player__img" alt="" />
          </div>
          <h4 className="player-title tilte">EDM</h4>
          <span className="player-author author">Tấn Sang</span>
          <div className="progress">
            <input
              id="progress__input"
              type="range"
              defaultValue={0}
              step={1}
              min={0}
              max={100}
            />
            <audio src="/music/edm.mp3" className=" progress__song" />
            {/* <span id="progress__time">0</span> */}
          </div>
        </div>
        <div className="music__audio-btn">
          <i className="fa fa-backward player-prev" />
          <i className="fa fa-play player-play" />
          <i className="fa fa-forward player-next" />
        </div>
      </div>
      <div className="menu__history">
        <div className="menu__history-title">
          <h3>Listening history</h3>
        </div>
        <div className="menu__history-list">
          <div className="list__item">
            <img className="list__item-img" src="/img/img_music/1.jpg" alt="" />
            <h4 className="list__item-name">EDM</h4>
            <span className="list__item-author">Nhiều nghệ sĩ</span>
          </div>
          <div className="list__item">
            <img className="list__item-img" src="/img/img_music/1.jpg" alt="" />
            <h4 className="list__item-name">Nevada</h4>
            <span className="list__item-author">Chưa rõ</span>
          </div>
          <div className="list__item">
            <img className="list__item-img" src="/img/img_music/1.jpg" alt="" />
            <h4 className="list__item-name">EDM</h4>
            <span className="list__item-author">Nhiều nghệ sĩ</span>
          </div>
          <div className="list__item">
            <img className="list__item-img" src="/img/img_music/1.jpg" alt="" />
            <h4 className="list__item-name">EDM</h4>
            <span className="list__item-author">Nhiều nghệ sĩ</span>
          </div>
          <div className="list__item">
            <img className="list__item-img" src="/img/img_music/1.jpg" alt="" />
            <h4 className="list__item-name">EDM</h4>
            <span className="list__item-author">Nhiều nghệ sĩ</span>
          </div>
          <div className="list__item">
            <img className="list__item-img" src="/img/img_music/1.jpg" alt="" />
            <h4 className="list__item-name">EDM</h4>
            <span className="list__item-author">Nhiều nghệ sĩ</span>
          </div>
          <div className="list__item">
            <img className="list__item-img" src="/img/img_music/1.jpg" alt="" />
            <h4 className="list__item-name">EDM</h4>
            <span className="list__item-author">Nhiều nghệ sĩ</span>
          </div>
          <div className="list__item">
            <img className="list__item-img" src="/img/img_music/1.jpg" alt="" />
            <h4 className="list__item-name">EDM</h4>
            <span className="list__item-author">Nhiều nghệ sĩ</span>
          </div>
          <div className="list__item">
            <img className="list__item-img" src="/img/img_music/1.jpg" alt="" />
            <h4 className="list__item-name">EDM</h4>
            <span className="list__item-author">Nhiều nghệ sĩ</span>
          </div>
          <div className="list__item">
            <img className="list__item-img" src="/img/img_music/1.jpg" alt="" />
            <h4 className="list__item-name">EDM</h4>
            <span className="list__item-author">Nhiều nghệ sĩ</span>
          </div>
          <div className="list__item">
            <img className="list__item-img" src="/img/img_music/1.jpg" alt="" />
            <h4 className="list__item-name">EDM</h4>
            <span className="list__item-author">Nhiều nghệ sĩ</span>
          </div>
          <div className="list__item">
            <img className="list__item-img" src="/img/img_music/1.jpg" alt="" />
            <h4 className="list__item-name">EDM</h4>
            <span className="list__item-author">Nhiều nghệ sĩ</span>
          </div>
          <div className="list__item">
            <img className="list__item-img" src="/img/img_music/1.jpg" alt="" />
            <h4 className="list__item-name">EDM</h4>
            <span className="list__item-author">Nhiều nghệ sĩ</span>
          </div>
          <div className="list__item">
            <img className="list__item-img" src="/img/img_music/1.jpg" alt="" />
            <h4 className="list__item-name">EDM</h4>
            <span className="list__item-author">Nhiều nghệ sĩ</span>
          </div>
          <div className="list__item">
            <img className="list__item-img" src="/img/img_music/1.jpg" alt="" />
            <h4 className="list__item-name">EDM</h4>
            <span className="list__item-author">Nhiều nghệ sĩ</span>
          </div>
          <div className="list__item">
            <img className="list__item-img" src="/img/img_music/1.jpg" alt="" />
            <h4 className="list__item-name">EDM</h4>
            <span className="list__item-author">Nhiều nghệ sĩ</span>
          </div>
          <div className="list__item">
            <img className="list__item-img" src="/img/img_music/1.jpg" alt="" />
            <h4 className="list__item-name">EDM</h4>
            <span className="list__item-author">Nhiều nghệ sĩ</span>
          </div>
        </div>
      </div>
    </section>
  );
}
