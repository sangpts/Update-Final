import {
    ADD_COMMENT,
    DELETE_COMMENT,
    COMMENTS_LOADED_FAIL,
    COMMENTS_LOADED_SUCCESS,
    COMMENT_CLICK,
    COMMENT_CLICK_HOME,
} from "../contexts/constants";

export const commentReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, payload],
            };

            // case COMMENT_CLICK:
            //     return {...state, comment: payload };

            // case COMMENT_CLICK_HOME:
            //     return {
            //         ...state,
            //         commentHome: payload,
            //         commentsLoading: true,
            //     };

        case COMMENTS_LOADED_SUCCESS:
            return {
                ...state,
                comments: payload,
                commentsLoading: false,
            };

        case COMMENTS_LOADED_FAIL:
            return {
                ...state,
                comments: [],
                commentsLoading: false,
            };

        default:
            return state;
    }
};