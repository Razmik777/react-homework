// Создайте функциональный компонент Greeting, который
// принимает пропсы name и age и отображает сообщение Привет, {name}!, тебе {age} лет!.
// ● Используйте компонент Greeting в вашем основном компоненте
// App, передавая разные имена в качестве пропсов.

import React from 'react';

function Greeting( {name, age} ) {
    return ( 
        <div>
            <h1>Привет, {name}, тебе {age} лет!</h1>
        </div>
     );
}

export default Greeting;