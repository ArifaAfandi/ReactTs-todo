import React from 'react'
import { TodoType } from '../App'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
    <Card>
      <Card.Body>
        {title}
        <div>
          <Button onClick={deleteTodo} variant="danger">Delete</Button>
          <Button onClick={completeButton} variant="success">{completed ? 'uncomplete this' : 'complete this'}</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default Todo