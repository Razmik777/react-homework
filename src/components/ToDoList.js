// Создать компонент TodoList, который позволяет добавлять
// элементы в список дел через текстовое поле ввода. Список
// должен обновляться при добавлении нового дела.

import React, { useState } from 'react';

function ToDoList() {
    const [list, setList] = useState([]);
    const [text, setText] = useState('');

    const getText = (e) => {
        setText(e.target.value);
    }

    const addItem = () => {
        setList([...list, text]);
        setText('');
    }

  return (
    <div>
        <label>Введите текст </label>
        <input type="text" value={text} onChange={getText} />
        <button onClick={addItem}>Добавить</button>
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
  );
}   

export default ToDoList;