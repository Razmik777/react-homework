// Создать компонент CommentsList, который отображает список комментариев. Каждый комментарий должен иметь кнопку для его удаления. При нажатии на кнопку комментарий должен удаляться из списка.

// Можно использовать заготовку:

// const [comments, setComments] = useState([
// { id: 1, text: "Это первый комментарий" },
// { id: 2, text: "Это второй комментарий" },
// { id: 3, text: "Это третий комментарий" }
// ]);

import React, { useState } from 'react';

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },        
        { id: 2, text: "Это второй комментарий" },        
        { id: 3, text: "Это третий комментарий" }        
    ]);

    const removeComment = (id) => {        
        setComments(comments.filter(comment => comment.id !== id));        
    }    
    return ( 
        <div>            
            {comments.map((comment) => (                
                <div key={comment.id}>                    
                    <p>{comment.text}</p>                    
                    <button onClick={() => removeComment(comment.id)}>Удалить</button>                
                </div>            
            ))}        
        </div>    
    );
}

export default CommentsList;