// src/components/TodoList.jsx
import React from 'react'
import Todo from './Todo'

function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          onToggle={() => toggleTodo(index)}
          onDelete={() => deleteTodo(index)}
        />
      ))}
    </ul>
  )
}

export default TodoList
