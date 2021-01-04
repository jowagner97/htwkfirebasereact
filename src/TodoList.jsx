import React, { useState } from 'react';
import { Todo } from "./Todo";
import { TodoForm } from "./TodoForm";
import {useParams}from "react-router-dom"

export const TodoList = () => {
    const params = useParams();

    console.log({params})

    const [todos, setTodos] = useState([
      {
        text: "Learn about React",
        isCompleted: false,
      },
      {
        text: "Meet friend for lunch",
        isCompleted: false,
      },
      {
        text: "Build really cool todo app",
        isCompleted: false,
      },
    ]);

    const addTodo = (text) => {
      const newTodos = [...todos, { text }];
      setTodos(newTodos);
    };

    const completeTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = !newTodos[index].isCompleted;
      setTodos(newTodos);
    };

    const removeTodo = (index) => {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    };

    return (
      <div className="app">
        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
      </div>
    );
  };