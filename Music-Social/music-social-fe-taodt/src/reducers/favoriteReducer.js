import {
    ADD_FAVORITE,
    DELETE_FAVORITE,
    FAVORITES_LOADED_FAIL,
    FAVORITES_LOADED_SUCCESS,
    FAVORITE_CLICK,
    FAVORITE_CLICK_HOME,
    FAVORITE_CLICK_NEXT
} from "../contexts/constants";

export const favoriteReducer = (state, action) => {
    const { type, payload } = action;
    console.log(state.favorites.filter(
        (favorite) => favorite._id !== payload
    ))
    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                favorites: [...state.favorites, payload],
            };

        // case FAVORITE_CLICK:
        //     return {...state, favorite: payload };

        case FAVORITE_CLICK_HOME:
            return {
                ...state,
                favoriteHome: payload,
                favoritesLoading: true,
            };

        case FAVORITE_CLICK_NEXT:
            return {
                ...state,
                favoriteHome: payload,
            };

        case DELETE_FAVORITE:
            return {
                ...state,
                favorites: state.favorites.filter(
                    (favorite) => favorite._id !== payload
                ),
            };
        case FAVORITES_LOADED_SUCCESS:
            return {
                ...state,
                favorites: payload,
                favoritesLoading: false,
            };

        case FAVORITES_LOADED_FAIL:
            return {
                ...state,
                favorites: [],
                favoritesLoading: false,
            };

        default:
            return state;
    }
};