import {
  ADD_POST,
  DELETE_POST,
  POSTS_LOADED_FAIL,
  POSTS_LOADED_SUCCESS,
  POST_CLICK,
  POST_SEARCH,
  UPDATE_POST,
} from "../contexts/constants";

export const postReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, payload],
      };
    case POSTS_LOADED_SUCCESS:
      return {
        ...state,
        posts: payload,
        postsLoading: false,
      };

    case POST_CLICK:
      return { ...state, post: payload };

    case POST_SEARCH:
      return { ...state, searchpost: payload };

    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== payload),
      };
    case UPDATE_POST:
      const newPosts = state.posts.map((post) => (post._id === payload._id ? payload : post));

      return {
        ...state,
        posts: newPosts,
      };

    case POSTS_LOADED_FAIL:
      return {
        ...state,
        posts: [],
        postsLoading: false,
      };

    default:
      return state;
  }
};
