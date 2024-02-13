import {useState} from "react";
import classes from './Counter.module.scss';

export function Counter() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(prevState => prevState + 1);
    }

    return (
        <div>
            <h2>{count}</h2>
            <button className={classes.btn} onClick={increment}>Increment</button>
        </div>
    );
}