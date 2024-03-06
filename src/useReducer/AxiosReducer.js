
export const initialState = {
    newPlayingMovies: [],
    popularMovies: [],
    ratedMovies: []
};

export const actionTypes = {
    SET_NOW_PLAYING_MOVIES: 'SET_NOW_PLAYING_MOVIES',
    SET_POPULAR_MOVIES: 'SET_POPULAR_MOVIES',
    SET_RATED_MOVIES: 'SET_RATED_MOVIES'
};

export const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_NOW_PLAYING_MOVIES:
            return { ...state, newPlayingMovies: action.payload };
        case actionTypes.SET_POPULAR_MOVIES:
            return { ...state, popularMovies: action.payload };
        case actionTypes.SET_RATED_MOVIES:
            return { ...state, ratedMovies: action.payload };
        default:
            return state;
    }
};
