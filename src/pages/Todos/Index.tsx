import 'todomvc-app-css/index.css'
import Header from './components/Header'
import ToggleBtn from './components/ToggleBtn'
import TodoItem from './components/TodoItem'
import Footer from './components/Footer'
import React, { useState } from 'react'

interface TodoItem {
  name: string
}
export default function Todos(props) {
  const [newTodo, setNewTodo] = useState('')
  const [todoList, setTodoList] = useState<TodoItem[]>([])

  const addTodo = () => {
    setTodoList([...todoList, { name: newTodo }])
    setNewTodo('')
  }

  return (
    <div className="">
      <section className="todoapp">
        <Header newTodo={newTodo} onNewTodoChange={setNewTodo} onSubmit={addTodo} />

        <section className="main">
          <ToggleBtn />
          <ul className="todo-list">
            <TodoItem />
            {/* <li className="completed">
              <div className="view">
                <input className="toggle" type="checkbox" checked />
                <label>Taste JavaScript</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" value="Create a TodoMVC template" />
            </li>
            <li>
              <div className="view">
                <input className="toggle" type="checkbox" />
                <label>Buy a unicorn</label>
                <button className="destroy"></button>
              </div>
              <input className="edit" value="Rule the web" />
            </li> */}
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
