import React from 'react'
import { TodoType } from '../App'
import Todo from './Todo'

interface TodosType {
  todos: TodoType[];
  removeTodo: (id: string) => void;
  completeTodo: (id: string) => void;
}

const Todos: React.FC<TodosType> = ({ todos, removeTodo, completeTodo }) => {
  return (
    <section>
      {
        todos.map((todo) => <Todo
          key={todo.id}
          todo={{ ...todo }}
          removeTodo={removeTodo}
          completeTodo={completeTodo}
        />)
      }
    </section>
  )
}

export default Todos