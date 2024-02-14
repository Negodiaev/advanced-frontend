import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import {Theme} from "../theme/ThemeContext";
import {useTheme} from "../theme/useTheme";
import {AboutPageLazy} from "../pages/AboutPage/AboutPageLazy";
import {MainPageLazy} from "../pages/MainPage/MainPageLazy";

// import {Counter} from "./Counter/Counter";

export function App() {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme === Theme.DARK ? ' dark' : ''}`}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
            <button onClick={toggleTheme}>Toggle theme</button>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/about' element={<AboutPageLazy/>}/>
                    <Route path='/' element={<MainPageLazy/>}/>
                    {/*
                    <h1>Home page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad atque eum eveniet ex
                        harum,
                        ipsum libero minus numquam obcaecati officiis similique sunt suscipit tempora voluptate,
                        voluptatum.</p>
                        <Counter/>
                    */}
                </Routes>
            </Suspense>
        </div>
    );
}