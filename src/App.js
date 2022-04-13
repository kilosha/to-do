import React from 'react'
import TodoList from './TodoList'



export default function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, title: 'First todo', completed: false},
    {id: 2, title: 'Second todo', completed: false},
  ]);
  const [todoTitle, setTodoTitle] = React.useState('');

  const addTodo = event => {
    if (event.key === 'Enter' && todoTitle.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          completed: false
        }
      ]);
      setTodoTitle('');
    }
  }

  return (
      <div className="container">
        <h1>Todo app</h1>
        <div className="input-field">
          <input 
            type="text" 
            value={todoTitle} 
            onChange={event => setTodoTitle(event.target.value)}
            onKeyPress={addTodo}
          />
          <label>Todo name</label>
        </div>

        <TodoList todos={todos} />
      </div>
    )
  
}

