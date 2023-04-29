// to make changes and repairs easier when everything is centralized here
export const api = "http://localhost:5000/";

// *** USER ***
// api auth user
export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? `${api}api`
    : "https://sleepy-inlet-56101.herokuapp.com/api";

// access token
export const LOCAL_STORAGE_TOKEN_NAME = "social-media-web";

// user
export const UPDATE_USER = "UPDATE_USER";
export const USERS_LOADED_FAIL = "USERS_LOADED_FAIL";
export const USERS_LOADED_SUCCESS = "USERS_LOADED_SUCCESS";

// *** MUSIC ****
// api upload music
export const apiUpload =
  process.env.NODE_ENV !== "production"
    ? `${api}uploadFile/`
    : "https://sleepy-inlet-56101.herokuapp.com/api";

// api upload Image music
export const apiUploadImgMp3 =
  process.env.NODE_ENV !== "production"
    ? `${api}uploadFile/ImgMp3/`
    : "https://sleepy-inlet-56101.herokuapp.com/api";

// api upload File music
export const apiUploadFileMp3 =
  process.env.NODE_ENV !== "production"
    ? `${api}uploadFile/Mp3/`
    : "https://sleepy-inlet-56101.herokuapp.com/api";

// music
export const MUSICS_LOADED_SUCCESS = "MUSICS_LOADED_SUCCESS";
export const ADD_MUSIC = "ADD_MUSIC";
export const DELETE_MUSIC = "DELETE_MUSIC";
export const FIND_MUSIC = "FIND_MUSIC";
export const MUSICS_LOADED_FAIL = "MUSICS_LOADED_FAIL";
export const MUSIC_CLICK = "MUSIC_CLICK";
export const MUSIC_CLICK_HOME = "MUSIC_CLICK_HOME";
export const MUSIC_CLICK_FAVORITE = "MUSIC_CLICK_FAVORITE";
export const UPDATE_MUSIC = "UPDATE_MUSIC";
export const MUSIC_CLICK_NEXT = "MUSIC_CLICK_NEXT";
export const MUSIC_CLICK_PRE = "MUSIC_CLICK_PRE";
export const MUSIC_FLAG = "MUSIC_FLAG";

// *** POST ***
// api POST a new post to db
export const apiPost =
  process.env.NODE_ENV !== "production"
    ? `${api}api/posts`
    : "https://sleepy-inlet-56101.herokuapp.com/api";

// state post in context
export const POSTS_LOADED_SUCCESS = "POSTS_LOADED_SUCCESS";
export const ADD_POST = "ADD_POST";
export const FIND_POST = "FIND_POST";
export const POSTS_LOADED_FAIL = "POSTS_LOADED_FAIL";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const POST_CLICK = "POST_CLICK";
export const POST_SEARCH = "POST_SEARCH";

// *** FAVORITE ***
// api FAVORITE a new post to db
export const apiFavorite =
  process.env.NODE_ENV !== "production"
    ? `${api}api/favorites`
    : "https://sleepy-inlet-56101.herokuapp.com/api";

// state post in context
export const FAVORITES_LOADED_SUCCESS = "FAVORITES_LOADED_SUCCESS";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FIND_FAVORITE = "FIND_FAVORITE";
export const FAVORITES_LOADED_FAIL = "FAVORITES_LOADED_FAIL";
export const FAVORITE_CLICK = "FAVORITE_CLICK";
export const FAVORITE_CLICK_HOME = "MUSIC_CLICK_HOME";
export const FAVORITE_CLICK_NEXT = "FAVORITE_CLICK_NEXT";

// *** COMMENT ***
// api COMMENT a new post to db
export const apiCmt =
  process.env.NODE_ENV !== "production"
    ? `${api}api/comments`
    : "https://sleepy-inlet-56101.herokuapp.com/api";

// state post in context
export const COMMENTS_LOADED_SUCCESS = "COMMENTS_LOADED_SUCCESS";
export const ADD_COMMENT = "ADD_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const FIND_COMMENT = "FIND_COMMENT";
export const COMMENTS_LOADED_FAIL = "COMMENTS_LOADED_FAIL";
export const COMMENT_CLICK = "COMMENT_CLICK";
export const COMMENT_CLICK_HOME = "COMMENT_CLICK_HOME";
