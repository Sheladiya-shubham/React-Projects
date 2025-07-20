export const addMovie = (data) => {
    return {
        type: "ADD_MOVIE",
        payload: data
    }
}

export const getAllMovies = () => {
    return {
        type: "GET_ALL_MOVIE",
    }
}

export const deleteMovie = (id) => {
    return {
        type: "DELETE_MOVIE",
        payload: id
    }
}

export const getSingleMovie = (id) => {
    return {
        type: "GET_SINGLE_MOVIE",
        payload: id
    }
}

export const updateMovie = (data) => {
    return {
        type: "UPDATE_MOVIE",
        payload: data
    }
}

export const loading = () => {
    return {
        type: "LOADING",
    }
}



// Async Action

export const getAllMoviesAsync = () => {
    return (dispatch) => {
        dispatch(loading());

        setTimeout(()=> {
            dispatch(getAllMovies())
        }, 3000);
    }   
}