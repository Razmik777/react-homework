// Создать компонент Timer, который отображает таймер, увеличивающийся на 1
// каждую секунду. Использовать useEffect для установки и очистки интервала.

import React, { useState, useEffect } from 'react';

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []); 

    return (
        <div>
            <p>Текущее время: {seconds} секунд</p>
        </div>
    );
}

export default Timer;