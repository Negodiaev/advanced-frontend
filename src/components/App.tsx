import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";

import {AboutPageLazy} from "../pages/AboutPage/AboutPageLazy";
import {MainPageLazy} from "../pages/MainPage/MainPageLazy";

// import {Counter} from "./Counter/Counter";

export function App() {
    return (
        <div className='app'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
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