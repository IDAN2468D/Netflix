import { useEffect, useReducer } from 'react'
import { Alert } from 'react-native'; // Assuming you're using React Native
import { getNowPlayingMovies, getPopularMovies, getTopRatedMovies } from '../apis/Network';
import { initialState, reducer, actionTypes } from '../useReducer/AxiosReducer'

const useAxiosHook = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: nowPlayingData, status: nowPlayingStatus } = await getNowPlayingMovies();
                if (nowPlayingStatus === 200) {
                    dispatch({ type: actionTypes.SET_NOW_PLAYING_MOVIES, payload: nowPlayingData.results });
                } else {
                    Alert.alert(`Request failed with ${nowPlayingData}`);
                }

                const { data: popularData, status: popularStatus } = await getPopularMovies();
                if (popularStatus === 200) {
                    dispatch({ type: actionTypes.SET_POPULAR_MOVIES, payload: popularData.results });
                } else {
                    Alert.alert(`Request failed with ${popularData}`);
                }

                const { data: ratedData, status: ratedStatus } = await getTopRatedMovies();
                if (ratedStatus === 200) {
                    dispatch({ type: actionTypes.SET_RATED_MOVIES, payload: ratedData.results });
                } else {
                    Alert.alert(`Request failed with ${ratedData}`);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return [state.newPlayingMovies, state.popularMovies, state.ratedMovies];
};

export default useAxiosHook;
