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
import { useSelector } from "react-redux";
import ThemeToggle from './components/lesson5/homework/ThemeToggle';

function App() {
  const isDarkTheme = useSelector((state) => state.isDarkTheme);
  // const liElements = [1, 2, 3, 4, 5, 6, 7];
  // const renderItem = (item, index) => {
  //     const style = { color: index % 2 === 0 ? 'red' : 'blue' };
  //     return (
  //       <div style={style}>
  //           {item} - Уникальный стиль
  //       </div>
  //     );
  // };
  return (
    <div className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
      <h1>Переключатель тем</h1>
      <ThemeToggle/>  
      {/* <Message name="Вася" age="20"/>
      <TextInput />
      <ToDoList />
      <Timer /> 
      <CommentsList />
      <TextInput />
      <Counter />
      <ThemeSwitcher />
      <TemperatureConverter />
      <TodoList />
      <Box>
        <p>First item</p>
      </Box>
      <Box>
        <p>Second item</p>
      </Box>
      <Box>
        <p>Third item</p>
      </Box>
      <Box>
        <img src={pic}></img>
      </Box>
      <ListNew listItems={liElements} renderItem={renderItem} />
      
      <Router>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/details/:id" element={<DetailPage />} />
        </Routes>
      </Router>

        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          </Router>

        <New/> */}

        {/* <UserProvider>
          <ThemeProvider>
            <Header />
            <Profile />
            <Footer />
          </ThemeProvider>
        </UserProvider> */}
    </div>
  );
}
export default App;
