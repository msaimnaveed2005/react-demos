import React, { useState } from 'react'

const TodoList = () => {
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!newItem.trim()) return

    setItems([...items, newItem.trim()])
    setNewItem('')
  }

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList