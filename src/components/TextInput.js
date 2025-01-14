// Создать компонент TextInput, который содержит текстовое
// поле ввода и отображает введённый текст под ним в реальном
// времени.

import React, { useState } from 'react';
function TextInput() {
    const [text, setText] = useState();

    const getText = (e) => {
        setText(e.target.value);
    }
    return ( 
        <div>
            <input type="text" value={text} onChange={getText} />
            <p>Вы ввели: {text}</p>
        </div>
     );
}

export default TextInput;