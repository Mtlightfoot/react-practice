import React, { useState } from "react";
import Button from 'react-bootstrap/Button';

function CountComponent() {
    const [count, setCount] = useState(0)

    function decrementCount() {
        setCount(prevCount => prevCount - 1)
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1)
    }

    return (<div>
        <button className="countButton pageTitleSm" onClick={decrementCount}>−</button>
        <span className="pageTitle">{count}</span>
        <button className="countButton pageTitleSm" onClick={incrementCount}>+</button>
    </div>
    )
}

export default CountComponent