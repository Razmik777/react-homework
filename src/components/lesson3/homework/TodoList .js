// Цель: Разработать компонент TodoList для управления задачами: добавление, отображение, и удаление задач.

// Компоненты:
// Используйте TextField для ввода новой задачи.
// Добавьте Button для добавления задачи в список.
// Для каждой задачи в списке используйте Card или ListItem из Material UI. Внутри каждого элемента списка разместите текст задачи и IconButton с иконкой удаления (например, DeleteIcon).

// Логика:
// При нажатии на кнопку добавления, новая задача должна добавляться в список.
// Рядом с каждой задачей должна быть кнопка для её удаления.

import React, { useState } from 'react';
import { TextField, Button, Card, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';    

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
            setNewTask('');
        }
    };

    const handleDeleteTask = (index) => {    
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className='task-input'>
            <TextField
                label="Новая задача"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleAddTask}>
                Добавить задачу
            </Button>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className='task-list'>
                        <Card>
                            <p>{task}</p>
                            <IconButton onClick={() => handleDeleteTask(index)}>
                                <DeleteIcon />
                            </IconButton>
                        </Card>
                    </li>
                ))}
            </ul>   
        </div>
       
    );
}
export default TodoList;