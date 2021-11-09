import React, { useContext} from 'react'
import authCtx from '../store/auth-context';

const MovieItem = ({ movieName, añoEstreno, directorName, moviePrecio, id }) => {
    const {dispatch} = useContext(authCtx);
    const handlerClick = (id) => {
        console.log(id);
        dispatch({type: "REMOVE_MOVIE", payload: id});
    }
    return (
        <div className="blog-preview" onClick={() => {
            handlerClick(id);
        }}>
            <h2>{movieName}</h2>
            <p>{añoEstreno}</p>
            <p>{directorName}</p>
            <p>{moviePrecio} $</p>
        </div>
    );
};

export default MovieItem;
