type TodoItemProps = {
  todoUuid: string
  todoName: string
  isChecked: boolean
  editingUuid: string
  editingContent: string
  handleToggleChecked: (uuid: string) => void
  handleDeleteTodo: (uuid: string) => void
  handleSetEditingUuid: (uuid: string, content: string) => void
  handleEditInputChange: React.Dispatch<React.SetStateAction<string>>
  handleUpdateTodo: (e: React.KeyboardEvent, uuid: string, content: string) => void
}
export default function TodoItem({
  todoUuid,
  todoName,
  isChecked,
  editingUuid,
  editingContent,
  handleToggleChecked,
  handleDeleteTodo,
  handleSetEditingUuid,
  handleEditInputChange,
  handleUpdateTodo
}: TodoItemProps) {
  const todoItemClassName = `
  ${isChecked ? 'completed' : ''}
  ${editingUuid === todoUuid ? 'editing' : ''}
  `

  return (
    <li
      className={todoItemClassName}
      onDoubleClick={() => handleSetEditingUuid(todoUuid, todoName)}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isChecked}
          onChange={() => handleToggleChecked(todoUuid)}
        />
        <label>{todoName}</label>
        <button className="destroy" onClick={() => handleDeleteTodo(todoUuid)}></button>
      </div>
      <input
        className="edit"
        value={editingContent}
        onChange={e => handleEditInputChange(e.target.value)}
        onKeyDown={e => handleUpdateTodo(e, todoUuid, editingContent)}
      />
    </li>
  )
}
