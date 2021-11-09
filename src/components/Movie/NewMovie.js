import React, { useContext, useState } from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import authCtx from '../store/auth-context';

const NewMovie = (props) => {
    const {dispatch} = useContext(authCtx);
    console.log("NewMovie");
    const [movieName, setMovieName] = useState("");
    const [añoEstreno, setAñoEstreno] = useState("");
    const [directorName, setdirectorName] = useState("");
    const [moviePrecio, setMoviePrecio] = useState("");
    const [showSumary, setShowSumary] = useState(false);

    const movieNameHandler = (event) => {
        console.log(event.target);
        setMovieName(event.target.value);
        if (movieName !== "") 
            setShowSumary(true);
        else 
            setShowSumary(false);
    };
    const añoEstrenoHandler = (event) => {
        setAñoEstreno(event.target.value);
        if (añoEstreno !== "") 
            setShowSumary(true);
        else 
            setShowSumary(false);
    };
    const directorNameHandler = (event) => {
        setdirectorName(event.target.value);
        if (directorName !== "") 
            setShowSumary(true);
        else 
            setShowSumary(false);
    };
    const moviePrecioHandler = (event) => {
        setMoviePrecio(event.target.value);
        if (moviePrecio !== "") 
            setShowSumary(true);
        else 
            setShowSumary(false);
    };
    const movie = {
        movieName,
        añoEstreno,
        directorName,
        moviePrecio
    };
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch({
            type: "ADD_MOVIE",
            payload: {...movie, id: Math.trunc(Math.random() * 100)}
        });
        setMovieName("");
        setAñoEstreno("");
        setdirectorName("");
        setdirectorName("");
        setMoviePrecio("");
    }

    return (
        <>
            <Card>
                <form onSubmit={submitHandler}>
                    <label>Nombre de la pelicula</label>
                    <input type="text" onChange={movieNameHandler} value={movieName}/>
                    <label>Año de estreno </label>
                    <input type="text" onChange={añoEstrenoHandler} value={añoEstreno}/>
                    <label>Director</label>
                    <input type="text" onChange={directorNameHandler} value={directorName}/>
                    <label>Precio</label>
                    <input type="number" onChange={moviePrecioHandler} value={moviePrecio}/>
                    <Button type="submit">Crear</Button>
                </form>
            </Card>
            {showSumary?
                <p>
                    El nombre de la pelicula es {movieName}, tiene el {añoEstreno} como año de estreno, como director a {directorName} y el precio de la pelicula es de {moviePrecio} $.
                </p>
            :
                <></>
            }
        </>
    );
};

export default NewMovie;
