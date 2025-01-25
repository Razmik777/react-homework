// Задание 1
// Разработайте функционал длā управлениā списком дел, которýй позволит
// полþзователāм добавлāтþ новýе задачи и удалāтþ их из списка.
// Настройка Redux Store:

// ● Определите началþное состоāние длā списка задач в вашем
// Redux store. Каждаā задача должна иметþ следуĀщие атрибутý:
// ● id: Уникалþнýй идентификатор (например, можно
// исполþзоватþ Date.now() длā его генерации).
// ● description : Описание задачи, введенное
// полþзователем.
// ● isCompleted : Статус вýполнениā задачи (изначалþно
// false).
// ● Создайте два действиā:
// ● Длā добавлениā новой задачи в список.
// ● Длā удалениā задачи из списка по id.

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../redux/taskSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <p>{task.description}</p>
          <button onClick={() => dispatch(removeTask(task.id))}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
