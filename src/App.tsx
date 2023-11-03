import React, { useState } from 'react';
import Form from './components/Form';
import Todos from './components/Todos';
import './app.scss'

export type TodoType = {
  title: string;
  id: string;
  completed: boolean
}

function App() {
  const [todos, setTodos] = useState<TodoType[]>([])

  const addTodo = (todo: TodoType): void => {
    setTodos((prev) => [...prev, todo])
  }

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const deleteAll = (): void => {
    setTodos([])
  }

  const completeTodo = (id: string) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
  }

  return (
    <main>
      <button onClick={deleteAll}>Delete All</button>
      <Form addTodo={addTodo} />
      <Todos
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        todos={todos}
      />
    </main>
  );
}

export default App;
