import React, {Suspense, useContext, useState} from 'react';
import {Routes, Route, Link} from "react-router-dom";
import {useTheme} from "app/providers";
import {classNames} from "../shared/lib/classNames/classNames";
import "./styles/index.scss"
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme, 'cls1', 'cls2'])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />
        </div>
    );
};

export default App;