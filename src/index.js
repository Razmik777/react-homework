import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';

if (!localStorage.getItem('tasks')) {
  localStorage.setItem('tasks', JSON.stringify([
    { id: 1, title: 'Задача 1', completed: false },
    { id: 2, title: 'Задача 2', completed: true }, 
    { id: 3, title: 'Задача 3', completed: false },
  ]));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
