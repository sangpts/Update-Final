import {
    UPDATE_USER,
    USERS_LOADED_FAIL,
    USERS_LOADED_SUCCESS,
} from "../contexts/constants";

export const userReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case UPDATE_USER:
            const newUsers = state.users.map((user) =>
                user._id === payload._id ? payload : user
            );
            return {
                ...state,
                users: newUsers,
            };

        case USERS_LOADED_SUCCESS:
            return {
                ...state,
                users: payload,
                userLoading: false,
            };

        case USERS_LOADED_FAIL:
            return {
                ...state,
                users: [],
                userLoading: false,
            };

        default:
            return state;
    }
};