import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import {classNames} from "shared/lib/classNames/classNames";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {useTheme} from "app/providers/ThemeProvider";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import './styles/index.scss';

export function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {
            hovered: true,
            selected: false
        }, [theme === Theme.DARK ? Theme.DARK : ''])}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/' element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}