// ● На DetailPage используйте useParams для извлечения
// параметра из URL (например, ID элемента) и отобразите
// детальную информацию об элементе.

import React from 'react';
import { useParams } from 'react-router-dom';

const articles = [
    { id: 1, title: 'Article 1', content: 'Article 1 content'},
    { id: 2, title: 'Article 2', content: 'Article 2 content'},
    { id: 3, title: 'Article 3', content: 'Article 3 content' },
    { id: 4, title: 'Article 4', content: 'Article 4 content'},
    { id: 5, title: 'Article 5', content: 'Article 5 content' },
]

const DetailPage = () => {
    const { id } = useParams();
    const article = articles.find((article) => article.id === parseInt(id));

    if(!article) {
        return <h2>Статья не найдена</h2>
    }

    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
};  

export default DetailPage;