import { useState } from 'react';
import './App.css';
import Todo from './Todo';
import { ThemeContext } from './context/ThemeContext';
import { TodoContext } from './context/TodoContext';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [todoList, setTodoList] = useState([]);

  const handleDelete = (index) => {
    const filterTodo = todoList.filter((_, currentIndex) => currentIndex !== index);
    setTodoList(filterTodo);
};

  return (
    <div className="App">
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <TodoContext.Provider value={{ todoList, setTodoList, handleDelete }}>
          <Todo />
        </TodoContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
