import axios from "axios";
import { createContext, useReducer } from "react";
import { userReducer } from "../reducers/userReducer";
import {
  apiUrl,
  UPDATE_USER,
  USERS_LOADED_FAIL,
  USERS_LOADED_SUCCESS,
} from "./constants";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // State
  const [userState, dispatch] = useReducer(userReducer, {
    user: null,
    users: [],
    usersLoading: true,
  });

  // get full user
  const getUsers = async (user) => {
    try {
      const response = await axios.get(`${apiUrl}/update/user/alluser`);
      if (response.data.success) {
        dispatch({
          type: USERS_LOADED_SUCCESS,
          payload: response.data.users,
        });
      }
    } catch (error) {
      dispatch({ type: USERS_LOADED_FAIL });
    }
  };

  // user context data
  const userContextData = {
    userState,
    getUsers,
  };
  return (
    <UserContext.Provider value={userContextData}>
      {" "}
      {children}{" "}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
