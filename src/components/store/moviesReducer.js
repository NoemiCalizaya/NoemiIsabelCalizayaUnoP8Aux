export const moviesReducer = (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE": {
            return [...state, action.payload];
        }
        case "REMOVE_MOVIE":{
            return state.filter((item) => item.id !== action.payload);
        }
        default: {
            return state;
        }
    }
};