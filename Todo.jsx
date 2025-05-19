<<<<<<< HEAD
// src/components/Todo.jsx
import React from 'react'

function Todo({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-enter" style={{
      background: '#ddd',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '6px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      textDecoration: todo.completed ? 'line-through' : 'none',
      opacity: todo.completed ? 0.6 : 1,
    }}>
      <span onClick={onToggle} style={{ cursor: 'pointer' }}>
        {todo.text}
      </span>
      <button onClick={onDelete} style={{ background: '#ff4d4f', color: 'white' }}>Delete</button>
    </li>
  )
}

export default Todo
=======
// src/components/Todo.jsx
import React from 'react'

function Todo({ todo, onToggle, onDelete }) {
  return (
    <li className="todo-enter" style={{
      background: '#ddd',
      padding: '10px',
      margin: '10px 0',
      borderRadius: '6px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      textDecoration: todo.completed ? 'line-through' : 'none',
      opacity: todo.completed ? 0.6 : 1,
    }}>
      <span onClick={onToggle} style={{ cursor: 'pointer' }}>
        {todo.text}
      </span>
      <button onClick={onDelete} style={{ background: '#ff4d4f', color: 'white' }}>Delete</button>
    </li>
  )
}

export default Todo
>>>>>>> 94dcc908b136dac317066a0c180ef55f38e086d3
