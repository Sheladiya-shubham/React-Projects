const initialState = {
    movies: JSON.parse(localStorage.getItem("Movies")) || [],
    movie: null,
    isLoading: false
}

const movieReducer = (state = initialState, action)=>{
    switch (action.type) {
         case "LOADING": 
                return {
                    ...state,
                    isLoading: true,
                }
        case "ADD_MOVIE":
             let data = JSON.parse(localStorage.getItem("Movies")) || []
                data.push(action.payload);
                localStorage.setItem("Movies", JSON.stringify(data));
            return{
                ...state,
                movies: [...state.movies, action.payload] 
            };

        case "GET_ALL_MOVIE":
            let getAlldata = JSON.parse(localStorage.getItem("Movies")) || [];
            return{
                ...state,
                movies: getAlldata,
                isLoading: false,
            }

        case "DELETE_MOVIE":
                let getdata = JSON.parse(localStorage.getItem("Movies"))
                let updateData = getdata.filter(mov => mov.id != action.payload)
                localStorage.setItem("Movies", JSON.stringify(updateData));
                return {
                    ...state,
                    movies: updateData
                }

        case "GET_SINGLE_MOVIE":
                const movieList = JSON.parse(localStorage.getItem("Movies"));
                const singleMovieData = movieList.find((mov) => mov.id == action.payload);
                return {
                    ...state,
                    movie: singleMovieData,
                    isLoading: false,
                } 

        case "UPDATE_MOVIE":
                let allData = JSON.parse(localStorage.getItem("Movies"))
                let updatedData = allData.map(mov => {
                    if(mov.id == action.payload.id){
                        return action.payload
                    }else{
                        return mov
                    }
                })
                localStorage.setItem("Movies", JSON.stringify(updatedData));
                return {
                    ...state,
                    movie: null,
                    movies: updatedData
                }
            default:
                return state;
        
    }
    
}

export default movieReducer;