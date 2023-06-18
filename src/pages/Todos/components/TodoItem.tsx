import { ChangeEvent, KeyboardEvent, useState } from 'react'

interface Props extends Todo {
  editingUuid: string
  editingContent: string
  onToggleCompleted: (id: string) => void
  onRemoveTodo: (id: string) => void
  onEditing: (id: string) => void
  onEditTodoContent: (content: string) => void
  onSubmitEditing: (id: string) => void
}

export default function TodoItem({
  content,
  completed,
  id,
  editingUuid,
  editingContent,
  onToggleCompleted,
  onRemoveTodo,
  onEditing,
  onEditTodoContent,
  onSubmitEditing
}: Props) {
  const todoItemClassName = `
  ${completed ? 'completed' : ''}
  ${editingUuid === id ? 'editing' : ''}
  `

  const [isComposing, setIsComposing] = useState(false)

  const initEditing = () => {
    onEditTodoContent(content)
    onEditing(id)
  }

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    onEditTodoContent(e.target.value)
  }
  const handleSubmitEditing = (e: KeyboardEvent) => {
    if (e.key !== 'Enter') return
    if (isComposing) return
    onSubmitEditing(id)
  }
  return (
    <li data-testid="todo-item" className={todoItemClassName} onDoubleClick={() => initEditing()}>
      <div className="view">
        <input
          data-testid="todo-item-checkbox"
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <label>{content}</label>
        <button className="destroy" onClick={() => onRemoveTodo(id)}></button>
      </div>
      <input
        data-testid="todo-item-input"
        value={editingContent}
        className="edit"
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        onChange={handleContentChange}
        onKeyDown={handleSubmitEditing}
      />
    </li>
  )
}
