import React, { createFactory, useState } from 'react'

export default function Header() {
  const [todo, setTodo] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }
  return (
    <header className="header pt-30">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={todo}
        onChange={handleChange}
      />
    </header>
  )
}
