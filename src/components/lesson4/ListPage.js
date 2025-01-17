// Создайте маленькое приложение со страницей списка
// (ListPage) и страницей деталей (DetailPage).

// ● На ListPage отобразите список элементов (например, статей или
// продуктов), где каждый элемент является ссылкой на
// DetailPage, содержащую детальную информацию об элементе.
// Используйте react-router-dom для настройки маршрутизации.
import React from 'react';
import { Link } from 'react-router-dom';

const articles = [
        { id: 1, title: 'Article 1' , content: 'Article 1 content'},
        { id: 2, title: 'Article 2' , content: 'Article 2 content'},
        { id: 3, title: 'Article 3' , content: 'Article 3 content'},
        { id: 4, title: 'Article 4' , content: 'Article 4 content'},
        { id: 5, title: 'Article 5' , content: 'Article 5 content'},
    ];
    
    const ListPage = () => {
        return (
            <div>
                <h1>Список статей</h1>
                <ul>
                    {articles.map((article) => (
                        <li key={article.id}>
                            <Link to={`/details/${article.id}`}>{article.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

export default ListPage;