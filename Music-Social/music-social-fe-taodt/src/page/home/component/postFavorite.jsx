import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { FavoriteContext } from "../../../contexts/farvoriteContext";
// import Ripple from "@bit/joshk.react-spinners-css.ripple";
import { apiUploadFileMp3, apiUploadImgMp3 } from "../../../contexts/constants";
import { MusicContext } from "../../../contexts/musicContext";

export default function PostFavorite() {
  // get global data by useContext
  const musicError = document.querySelector(".music__noti");
  const musicPlayed = document.querySelector(".music__audio");
  const { getIdMusicHome } = useContext(MusicContext);
  const {
    favoriteState: { favorites, favoritesLoading },
    getFavorites,
    deleteFavorite,
  } = useContext(FavoriteContext);
  const {
    authState: {
      user: { _id: userId },
    },
  } = useContext(AuthContext);

  const getMusicSelected = async (music) => {
    getIdMusicHome(music);
    musicError.style.display = "none";
    musicPlayed.style.display = "block";
  };
  // start get all favorites
  useEffect(() => getFavorites(), []);

  // check id for render favorites data
  const checkIdFavorite = favorites.filter((favorite) => {
    return favorite?.user?._id === userId && favorite?.music != null;
  });

  const deleteFavoriteClick = (favoriteId) => {
    deleteFavorite(favoriteId);
  };

  //check data uploaded for render
  if (favoritesLoading) {
    return (
      <div style={{ width: "100%", height: "100vh", position: "absolute" }}>
        {/* <Ripple
          style={{
            top: "50%",
            left: "50%",
            position: "relative",
            transform: "translate(-50%, -50%)",
          }}
          color="#be97e8"
        />{" "}
        ;{" "} */}
      </div>
    );
  } else {
    return (
      <div className="postfavrorite post-list post-list-3">
        <div className="post__items">
          <div className="favorites">
            <h3 className="title">My favorite playlist</h3>
            <div className="box__favor">
              {checkIdFavorite.map((favorite) => {
                return (
                  <div onClick={getMusicSelected.bind(this, favorite.music._id)}  className="like">
                    <img
                      src={`${apiUploadImgMp3}${favorite.music.musicImg}`}
                      className="img"
                      alt=""
                    />
                    <h4 className="name">{favorite?.music?.musicName}</h4>
                    <h4 className="author">{favorite?.music?.musicAuthor}</h4>
                    <a href="#">
                      <i
                        onClick={deleteFavoriteClick.bind(this, favorite._id)}
                        className="fa fa-heart"
                      />
                    </a>
                    <audio
                      className="audio"
                      src={`${apiUploadFileMp3}${favorite.music.musicFile}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}



// <div onClick={getMusicSelected.bind(this, _id)} className="like">
// <img src={`${apiUploadImgMp3}${musicImg}`} className="img" alt="" />
// <h4 className="name">{musicName}</h4>
// <h4 className="author">{musicAuthor}</h4>

// <form onClick={clickFavorite} enctype="multipart/form-data">
//   <a>
//     <input style={{ display: "none" }} type="submit" />
//     <i className="fa fa-heart" />
//   </a>
// </form>

// <audio className="audio" src={`${apiUploadFileMp3}${musicFile}`} />
// </div>