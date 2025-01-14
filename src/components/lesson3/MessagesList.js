// Создайте компонент MessagesList, который отображает список
// сообщений. Каждое сообщение должно иметь уникальный id и
// текст.
// ● Используйте проп key при рендеринге списка, чтобы
// обеспечить оптимальную производительность.

import React from 'react';

const MessagesList = ({ messages }) => {
    return (
        <ul>
            {messages.map((message) => (
                <li key={message.id}>{message.text}</li>
            ))}
        </ul>
    );
};

export default MessagesList;