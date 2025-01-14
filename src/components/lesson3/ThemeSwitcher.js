// Создайте компонент ThemeSwitcher. Этот компонент будет
// содержать кнопку, при нажатии на которую будет меняться
// тема интерфейса (светлая/темная).

// ● Используйте useState для управления текущей темой. Храните
// состояние текущей темы в компоненте ThemeSwitcher.
// Состояние может быть простой строкой, например, "light" или
// "dark".

// ● Передайте текущую тему в виде пропса в другой компонент,
// который изменит свой стиль в зависимости от полученной
// темы. Например, создайте компонент Content, который
// изменяет свой фоновый цвет в зависимости от темы.

// ● Добавьте логику для переключения темы в ThemeSwitcher. При
// нажатии на кнопку должно происходить переключение между
// "light" и "dark" состояниями, и это изменение должно
// отражаться в компоненте Content.

import React, { useState } from 'react';
import CustomizedSwitches from './switch';


function ThemeSwitcher() {
    const [theme, setTheme] = useState('light');

  function toggleTheme() {
    if(theme === 'light') {
        setTheme('dark');
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
  } else {
        setTheme('light');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
  }
}

    return (
        <div>
            <CustomizedSwitches checked={theme === 'dark'} onChange={toggleTheme} variant="contained" color="primary" onClick={toggleTheme}/>
        </div>
    )
}
export default ThemeSwitcher;