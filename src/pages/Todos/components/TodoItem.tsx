interface Props extends Todo {
  editingUuid: string
  onToggleCompleted: (id: string) => void
  onRemoveTodo: (id: string) => void
  onEditing: (id: string) => void
}

export default function TodoItem({
  content,
  completed,
  id,
  editingUuid,
  onToggleCompleted,
  onRemoveTodo,
  onEditing
}: Props) {
  const todoItemClassName = `
  ${completed ? 'completed' : ''}
  ${editingUuid === id ? 'editing' : ''}
  `

  return (
    <li data-testid="todo-item" className={todoItemClassName} onDoubleClick={() => onEditing(id)}>
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
      <input data-testid="todo-item-input" className="edit" />
    </li>
  )
}
