import React, {useState} from 'react';
import classes from './Counter.module.scss'

export const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button className={classes.green} onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};