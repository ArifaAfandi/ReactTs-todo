import React from 'react'
import { TodoType } from '../App'

type TodoProps = {
  todo: TodoType;
  removeTodo: (id: string) => void;
  completeTodo: (id: string) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, removeTodo, completeTodo }) => {
  const { title, id, completed } = todo

  const deleteTodo = (): void => {
    removeTodo(id)
  }

  const completeButton = (): void => {
    completeTodo(id)
  }

  return (
    <div>
      {title}
      <button onClick={deleteTodo}>Delete</button>
      <button onClick={completeButton}>{completed ? 'uncomplete this' : 'complete this'}</button>
    </div>
  )
}

export default Todo