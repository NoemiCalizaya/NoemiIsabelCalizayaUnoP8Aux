import React, { useCallback, useState } from 'react'
import { useContext } from 'react';
import Login from './components/Login/Login';
import NavBar from './components/navigation/NavBar';
import authCtx from './components/store/auth-context';
import NewMovie from './components/Movie/NewMovie';
import MoviesList from './components/Movie/MoviesList';
import "./index.css";

const App = () => {
    const ctx = useContext(authCtx);
    const [emailNavBar, setemailNavBar] = useState("");
    const emailN = useCallback((emailV) => {
        setemailNavBar(emailV);
    },[]);
    console.log("App");
    return (
        <div className="content">
            <NavBar email={emailNavBar}/>
            {ctx.isLoggedIn ? (
                <>
                    <NewMovie />
                    <MoviesList /> 
                </>
            ): (
                <Login emailL={emailN}/>
            )}
        </div>
    );
};

export default App;
