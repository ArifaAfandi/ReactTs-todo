import React, { useRef, FormEvent } from 'react';
import { TodoType } from '../App';


type FormProps = {
  addTodo: (todo: TodoType) => void;
};


const Form: React.FC<FormProps> = ({ addTodo }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    if (!inputRef.current?.value.trim()) return;

    addTodo({
      title: inputRef.current?.value,
      id: Date.now().toString(),
      completed: false
    })

    inputRef.current.value = ''
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Add todo</label>
      <input ref={inputRef} type="text" name="todo" id="todo" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;