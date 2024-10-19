import { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => setCount(count + 1);
    const handleDecrement = () => setCount(count - 1);

    return (
        <div className="counter-container">
            <h1>Contador</h1>
            <div className="count-display">{count}</div>
            <button onClick={handleIncrement} className="button">+</button>
            <button onClick={handleDecrement} className="button">-</button>
        </div>
    );
}

export default Counter;