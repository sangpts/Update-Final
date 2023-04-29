import axios from "axios";
import { createContext, useReducer } from "react";
import {
  COMMENTS_LOADED_SUCCESS,
  POSTS_LOADED_FAIL,
} from "../contexts/constants";
import { commentReducer } from "../reducers/cmtReducer";

import { apiUrl } from "./constants";

export const CommentContext = createContext();

const CommentContextProvider = ({ children }) => {
  // State
  const [commentState, dispatch] = useReducer(commentReducer, {
    comment: null,
    comments: [],
    commentsLoading: true,
  });

  // Get all posts
  const getComments = async () => {
    try {
      const response = await axios.get(`${apiUrl}/comments/datacmts`);
      if (response.data.success) {
        dispatch({
          type: COMMENTS_LOADED_SUCCESS,
          payload: response.data.comments,
        });
      }
    } catch (error) {
      dispatch({ type: POSTS_LOADED_FAIL });
    }
  };

  // post context data
  const postContextData = {
    commentState,
    getComments,
  };
  return (
    <CommentContext.Provider value={postContextData}>
      {" "}
      {children}{" "}
    </CommentContext.Provider>
  );
};

export default CommentContextProvider;
