// reducer save state for authenticated user
export const authReducer = (state, action) => {
    // First state for login web
    const {
        type,
        payload: { isAuthenticated, user },
    } = action;

    switch (type) {
        case `SET_AUTH`:
            return {
                ...state,
                authLoading: false,
                isAuthenticated,
                user,
            };

        default:
            return state;
    }
};