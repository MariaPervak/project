import React, {Suspense} from 'react';
import {useTheme} from "app/providers";
import {classNames} from "../shared/lib/classNames/classNames";
import "./styles/index.scss"
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme();
    return (
        <Suspense fallback="">
            <div className={classNames('app', {}, [theme])}>
                <Navbar />
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter />
                </div>
            </div>
        </Suspense>
    );
};

export default App;