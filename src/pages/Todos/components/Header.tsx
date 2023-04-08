import React, { createFactory, useState } from 'react'

type HeaderProp = {
  newTodo: string
  onNewTodoChange: React.Dispatch<React.SetStateAction<string>>
  onSubmit: () => void
}
export default function Header({ newTodo, onNewTodoChange, onSubmit }: HeaderProp) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onNewTodoChange(e.target.value)
  }
  const handleSubmit = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') return
    if (!newTodo) return
    onSubmit()
  }
  return (
    <header className='header pt-30'>
      <h1>todos</h1>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        value={newTodo}
        onChange={handleChange}
        onKeyDown={handleSubmit}
      />
    </header>
  )
}
