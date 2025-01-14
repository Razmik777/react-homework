
import './App.css';
import CommentsList from './components/CommentsList';
import Counter from './components/lesson3/Counter';
import Greeting from './components/lesson3/Greeting';
import TemperatureConverter from './components/lesson3/homework/TemperatureConverter';
import TodoList from './components/lesson3/homework/TodoList ';
import MessagesList from './components/lesson3/MessagesList';
import CustomizedSwitches from './components/lesson3/switch';
import ThemeSwitcher from './components/lesson3/ThemeSwitcher';
// import Message from './components/Message';
import TextInput from './components/TextInput';
// import Timer from './components/Timer';
// import ToDoList from './components/ToDoList';

function App() {
  return (
    <div className="App">
      {/* <Message name="Вася" age="20"/>
      <TextInput />
      <ToDoList />
      <Timer /> */}
      {/* <CommentsList /> */}
      {/* <TextInput />
      <Greeting name={name} age={age}/>
      <Counter />
      <MessagesList messages={messages}/> */}
      <ThemeSwitcher />
      <TemperatureConverter />
      <TodoList />
    </div>
  );
}

export default App;
