import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const changeText = (event) => {
    setText(event.target.value);
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, text]);
    setText('');
  }

  return (
    <div className="App">
      <div className='container'>
        <h1>Todo</h1>
        <form>
          <input value={text} onChange={changeText} placeholder='Add Todo'/>
          <button type="submit" onClick={addTodo}>Add Todo</button>
        </form>
        <ul>
          {todos.map(todo => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
