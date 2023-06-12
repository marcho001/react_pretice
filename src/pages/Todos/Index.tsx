import '../../assets/css/todomvc.css'
import Header from './components/Header'
import ToggleBtn from './components/ToggleBtn'
import TodoItem from './components/TodoItem'
import Footer from './components/Footer'
import React, { useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Todos() {
  const [todos, setTodos] = useState<Todo[]>([])
  const addTodo = (todo: Todo) => {
    setTodos(todos => [...todos, todo])
  }

  const toggleTodoCompleted = (id: string) => {
    setTodos(
      todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        }
        return item
      })
    )
  }
  const removeTodo = (id: string) => {
    setTodos(todos.filter(item => item.id !== id))
  }

  const [editingUuid, setEditingUuid] = useState('')

  return (
    <div className="max-w-[580px] m-auto pt-32">
      <section className="todoapp">
        <Header onSubmitTodo={addTodo} />

        <section className="main">
          <ToggleBtn />
          <ul className="todo-list">
            {todos.map(todo => (
              <TodoItem
                key={todo.id}
                {...todo}
                editingUuid={editingUuid}
                onToggleCompleted={toggleTodoCompleted}
                onRemoveTodo={removeTodo}
                onEditing={id => setEditingUuid(id)}
              />
            ))}
          </ul>
        </section>

        <footer className="footer h-12">
          <span className="todo-count">
            <strong>0</strong> item left
          </span>

          <ul className="filters">
            <li>
              <a className="" href="#/">
                All
              </a>
            </li>
            <li>
              <a className="" href="#/active">
                Active
              </a>
            </li>
            <li>
              <a className="" href="#/completed">
                Completed
              </a>
            </li>
          </ul>

          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
      <Footer />
    </div>
  )
}
