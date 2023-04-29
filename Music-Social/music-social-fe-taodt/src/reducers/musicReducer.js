import { useContext } from "react";
import {
  ADD_MUSIC,
  DELETE_MUSIC,
  MUSICS_LOADED_FAIL,
  MUSICS_LOADED_SUCCESS,
  MUSIC_CLICK,
  MUSIC_CLICK_FAVORITE,
  MUSIC_CLICK_HOME,
  MUSIC_CLICK_NEXT,
  MUSIC_CLICK_PRE,
  UPDATE_MUSIC,
  MUSIC_FLAG
} from "../contexts/constants";
export const statemusic = {
  musicFavorite: {},
  musicHome: {},
  music: {},
  musics: [],
  musicsLoading: true,
};

export const musicReducer = (state = statemusic, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_MUSIC:
      return {
        ...state,
        musics: [...state.musics, payload],
      };

    case MUSIC_CLICK:
      return { ...state, music: payload };

    case MUSIC_CLICK_HOME:
      return {
        ...state,
        musicHome: payload,
      };
    case MUSIC_FLAG:
      return {
        ...state,
        musicHome: payload,
      };
    case MUSIC_CLICK_NEXT:
      return {
        ...state,
        musicHome: payload,
      };
    case MUSIC_CLICK_PRE:
      return {
        ...state,
        musicHome: payload,
      };

    case MUSIC_CLICK_FAVORITE:
      return {
        ...state,
        musicFavorite: payload,
      };
    case UPDATE_MUSIC:
      const newMusics = state.musics.map((music) => (music._id === payload._id ? payload : music));
      return {
        ...state,
        musics: newMusics,
      };

    case MUSICS_LOADED_SUCCESS:
      return {
        ...state,
        musics: payload,
        musicsLoading: false,
      };

    case MUSICS_LOADED_FAIL:
      return {
        ...state,
        musics: [],
        musicsLoading: false,
      };

    default:
      return state;
  }
};
