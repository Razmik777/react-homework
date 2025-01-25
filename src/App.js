import React from 'react';
// import { Box, List, ThemeProvider } from '@mui/material';
import pic from './assets/random.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CommentsList from './components/CommentsList';
import Counter from './components/lesson3/Counter';
import Greeting from './components/lesson3/Greeting';
import TemperatureConverter from './components/lesson3/homework/TemperatureConverter';
import TodoList from './components/lesson3/homework/TodoList ';
import MessagesList from './components/lesson3/MessagesList';
import CustomizedSwitches from './components/lesson3/switch';
import ThemeSwitcher from './components/lesson3/ThemeSwitcher';
import ListNew from './components/lesson4/ListNew';
import Message from './components/Message';
import TextInput from './components/TextInput';
import Timer from './components/Timer';
import ToDoList from './components/ToDoList';
import ListPage from './components/lesson4/ListPage';
import DetailPage from './components/lesson4/DetailPage';
import MainPage from './components/lesson4/homework/MainPage';
import AboutPage from './components/lesson4/homework/AboutPage';
import New from './components/lesson4/New';
import { UserProvider, ThemeProvider  } from './components/lesson5/Contexts';
import Header from './components/lesson5/Header';
import Profile from './components/lesson5/Profile';
import Footer from './components/lesson5/Footer';
import { Provider, useSelector } from "react-redux";
import ThemeToggle from './components/lesson5/homework/ThemeToggle';
import store from '../src/components/lesson6/redux/store';
import { AddTask } from '@mui/icons-material';
import AddProduct from './components/AddProduct.jsx';
import ProductList from './components/ProductList.jsx';
import EditProduct from './components/EditProduct.jsx';

function App() {
  const [editingProduct , setEditingProduct] = React.useState(null);
  return (
    <div className='App'>
      <h1>Каталог продуктов</h1>
            <AddProduct />
            {editingProduct && (
                <div>
                    <h2>Изменить товар</h2>
                    <EditProduct product={editingProduct} onClose={() => setEditingProduct(null)} />
                </div>
            )}
            <ProductList setEditingProduct={setEditingProduct} />
      
    </div>
  );
}
export default App;
