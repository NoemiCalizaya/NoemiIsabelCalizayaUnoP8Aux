import React, { useContext } from 'react'
import authCtx from '../store/auth-context';
import MovieItem from './MovieItem';
import "./MoviesList.css";

const MoviesList = () => {
    const {state} = useContext(authCtx);
    console.log("MoviesList");
    return (
        <div>
            {state.map((movie) => {
                return <MovieItem key={movie.id} {...movie}/>
            })}
        </div>
    );
};

export default MoviesList;
