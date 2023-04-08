import '../../assets/css/todomvc.css'
import Header from './components/Header'
import ToggleBtn from './components/ToggleBtn'
import TodoItem from './components/TodoItem'
import Footer from './components/Footer'
import React, { useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
interface TodoItem {
  uuid: string
  name: string
  isChecked: boolean
}
export default function Todos() {
  const [newTodo, setNewTodo] = useState('')
  const [todoList, setTodoList] = useState<TodoItem[]>([])
  const [editingUuid, setEditingUuid] = useState('')
  const [editContent, setEditContent] = useState('')

  const addTodoItem = (data: TodoItem) => {
    setTodoList([...todoList, data])
  }
  const toggleTodoChecked = (uuid: string) => {
    setTodoList(
      todoList.map(item => {
        if (item.uuid === uuid) {
          item.isChecked = !item.isChecked
        }
        return item
      })
    )
  }

  const deleteTodo = (uuid: string) => {
    setTodoList(todoList.filter(item => item.uuid !== uuid))
  }

  const updateTodo = (uuid: string, content: string) => {
    setTodoList(
      todoList.filter(item => {
        if (item.uuid === uuid) {
          item.name = content
        }
        return item
      })
    )
  }
  const toggleAllTodo = (isChecked: boolean) => {
    setTodoList(
      todoList.map(item => {
        item.isChecked = isChecked
        return item
      })
    )
  }

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

  const handleClearComplete = () => {
    setTodoList(todoList.filter(item => !item.isChecked))
  }

  const [displayState, setDisplayState] = useState('all')
  const todoDisPlay = useMemo(() => {
    if (displayState === 'all') {
      return todoList
    }
    if (displayState === 'active') {
      return todoList.filter(item => !item.isChecked)
    }

    return todoList.filter(item => item.isChecked)
  }, [displayState, todoList])

  const sumTotalLefts = useMemo(() => {
    return todoList.filter(item => !item.isChecked).length
  }, [todoList])
  return (
    <div className='max-w-[580px] m-auto pt-32'>
      <section className='todoapp'>
        <Header newTodo={newTodo} onNewTodoChange={setNewTodo} onSubmit={addTodo} />

        <section className='main'>
          <ToggleBtn handleToggleAll={toggleAllTodo} />
          <ul className='todo-list'>
            {todoDisPlay.map(item => (
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

        <footer className='footer h-12'>
          <span className='todo-count'>
            <strong>{sumTotalLefts}</strong> item left{sumTotalLefts > 1 && 's'}
          </span>

          <ul className='filters'>
            <li>
              <a className={displayState === 'all' ? 'selected' : ''} href='#/' onClick={() => setDisplayState('all')}>
                All
              </a>
            </li>
            <li>
              <a
                className={displayState === 'active' ? 'selected' : ''}
                href='#/active'
                onClick={() => setDisplayState('active')}
              >
                Active
              </a>
            </li>
            <li>
              <a
                className={displayState === 'completed' ? 'selected' : ''}
                href='#/completed'
                onClick={() => setDisplayState('completed')}
              >
                Completed
              </a>
            </li>
          </ul>

          <button className='clear-completed' onClick={handleClearComplete}>
            Clear completed
          </button>
        </footer>
      </section>
      <Footer />
    </div>
  )
}
