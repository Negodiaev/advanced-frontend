import {useState} from "react";
import './Counter.scss';

export function Counter( ) {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(prevState => prevState + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
    );
}