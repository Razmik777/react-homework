// Разработайте компонент Counter, который отображает число и
// две кнопки: одна для увеличения значения на 1, а другая для
// уменьшения на 1.
// 2. Используйте хук useState для управления состоянием счётчика.
// 3. Кнопки можно сделать с помощью material ui

import React, { useState } from 'react';
import { Button } from '@mui/material';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return ( 
        <div>
            <h1>Счетчик: {count}</h1>
            <Button variant="contained" color="primary" onClick={increment}>+</Button>
            <Button variant="contained" color="secondary" onClick={decrement}>-</Button>
        </div>
     )
}   

export default Counter;