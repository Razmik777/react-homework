// Цель: Создать компонент TemperatureConverter, 
// используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

// Компоненты:
// Используйте TextField для ввода значения температуры.
// Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

// Логика:
// При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
// Реализуйте конвертацию температур в обоих направлениях.

import React, { useState } from 'react';
import { TextField} from '@mui/material';

function TemperatureConverter() {
    const [celsius, setCelsius] = useState(''); 
    const [fahrenheit, setFahrenheit] = useState('');

    const handleCelsiusChange = (e) => {
        setCelsius(e.target.value);
        const fahrenheitValue = (e.target.value * 9/5) + 32;
        setFahrenheit(fahrenheitValue.toFixed(2)); 
    };

    const handleFahrenheitChange = (e) => {
        setFahrenheit(e.target.value);
        const celsiusValue = (e.target.value - 32) * 5/9;   
        setCelsius(celsiusValue.toFixed(2)); 
    };

    return (
        <div className="temperature-converter">
            <TextField
                label="Температура в Цельсиях"
                value={celsius}
                onChange={handleCelsiusChange}
            />
            <TextField
                label="Температура в Фаренгейте"
                value={fahrenheit}
                onChange={handleFahrenheitChange}
            />           
        </div>        
    );
}

export default TemperatureConverter;