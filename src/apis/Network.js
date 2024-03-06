import axios from "axios";

const Config = {
    baseURL: 'https://api.themoviedb.org/3/movie',
    token: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZjViN2Q1N2YxMWM4NTEwMjdkYTAwNWZhZWJjYjQzMSIsInN1YiI6IjY1YjYyNjQxYjExMzFmMDE0OTI5OWE2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.37yijH0p9FI_WEWYkU_8ZR9FY7MGoo_y2vOWt_Yq0O8"
}

export const baseImagePath = (size, path) => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
}

export const getUpcomingMovies = async () => {
    try {
        const response = await axios.get(`${Config.baseURL}/upcoming`, {
            headers: {
                Authorization: `Bearer ${Config.token}`
            }
        })
        const data = response.data
        const status = response.status
        return { success: true, data: data, status: status }
    } catch (error) {
        console.log(error);
        return { success: false, data: error }
    }
}

export const getNowPlayingMovies = async () => {
    try {
        const response = await axios.get(`${Config.baseURL}/now_playing`, {
            headers: {
                Authorization: `Bearer ${Config.token}`
            }
        })
        const data = response.data
        const status = response.status
        return { success: true, data: data, status: status }
    } catch (error) {
        console.log(error);
        return { success: false, data: error }
    }
}

export const getPopularMovies = async () => {
    try {
        const response = await axios.get(`${Config.baseURL}/popular`, {
            headers: {
                Authorization: `Bearer ${Config.token}`
            }
        })
        const data = response.data
        const status = response.status
        return { success: true, data: data, status: status }
    } catch (error) {
        console.log(error);
        return { success: false, data: error }
    }
}

export const getTopRatedMovies = async () => {
    try {
        const response = await axios.get(`${Config.baseURL}/top_rated`, {
            headers: {
                Authorization: `Bearer ${Config.token}`
            }
        })
        const data = response.data
        const status = response.status
        return { success: true, data: data, status: status }
    } catch (error) {
        console.log(error);
        return { success: false, data: error }
    }
}
