// — В каждом компоненте добавьте простой текст, например, <h1>Главная страница</h1> для HomePage и <h1>О нас</h1> для AboutPage.
// — Реализовать переходы.

import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div>
            <h1>Главная страница</h1>
            <Link to="/about">О нас</Link>
        </div>
    )
}   

export default MainPage 