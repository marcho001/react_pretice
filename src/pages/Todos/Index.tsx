import 'todomvc-app-css/index.css'
import Header from './components/Header'
import ToggleBtn from './components/ToggleBtn'
import TodoItem from './components/TodoItem'
import Footer from './components/Footer'
import React, { useState } from 'react'

import useTodoItem from './composables/useTodoItem'
import { v4 as uuidv4 } from 'uuid'

export default function Todos() {
  const [newTodo, setNewTodo] = useState('')
  const { todoList, addTodoItem, toggleTodoChecked, deleteTodo, updateTodo, toggleAllTodo } =
    useTodoItem()

  const [editingUuid, setEditingUuid] = useState('')
  const [editContent, setEditContent] = useState('')
  const setEditingTodo = (uuid: string, content: string) => {
    setEditingUuid(uuid)
    setEditContent(content)
  }

  const addTodo = () => {
    addTodoItem({ uuid: uuidv4(), name: newTodo, isChecked: false })
    setNewTodo('')
  }
  const handleUpdateTodo = (e: React.KeyboardEvent, uuid: string, content: string) => {
    if (e.key !== 'Enter' || !content) return
    updateTodo(uuid, content)
    setEditingTodo('', '')
  }

  return (
    <div className="">
      <section className="todoapp">
        <Header newTodo={newTodo} onNewTodoChange={setNewTodo} onSubmit={addTodo} />

        <section className="main">
          <ToggleBtn handleToggleAll={toggleAllTodo} />
          <ul className="todo-list">
            {todoList.map(item => (
              <TodoItem
                key={item.uuid}
                todoUuid={item.uuid}
                todoName={item.name}
                isChecked={item.isChecked}
                editingUuid={editingUuid}
                editingContent={editContent}
                handleToggleChecked={toggleTodoChecked}
                handleDeleteTodo={deleteTodo}
                handleSetEditingUuid={setEditingTodo}
                handleEditInputChange={setEditContent}
                handleUpdateTodo={handleUpdateTodo}
              />
            ))}
          </ul>
        </section>

        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> item left
          </span>

          <ul className="filters">
            <li>
              <a className="selected" href="#/">
                All
              </a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>

          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
      <Footer />
    </div>
  )
}
