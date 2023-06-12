import React, { createFactory, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
interface Props {
  onSubmitTodo: (todo: Todo) => void
}

export default function Header({ onSubmitTodo }: Props) {
  const [todo, setTodo] = useState('')
  const [isComposing, setIsComposing] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value)
  }
  const handleSubmit = (e: React.KeyboardEvent) => {
    if (isComposing) return
    if (todo.trim() === '') return
    if (e.key === 'Enter') {
      onSubmitTodo({
        content: todo.trim(),
        completed: false,
        id: uuidv4()
      })
      setTodo(() => '')
    }
  }
  return (
    <header className="header pt-30">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={todo}
        onChange={handleChange}
        onKeyDown={handleSubmit}
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
      />
    </header>
  )
}
