interface Props extends Todo {
  onToggleCompleted: (id: string) => void
}

export default function TodoItem({ content, completed, id, onToggleCompleted }: Props) {
  // const todoItemClassName = `
  // ${isChecked ? 'completed' : ''}
  // ${editingUuid === todoUuid ? 'editing' : ''}
  // `

  return (
    <li className="">
      <div className="view">
        <input
          data-testid="todo-item-checkbox"
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <label>{content}</label>
        <button className="destroy"></button>
      </div>
      {/* <input className="edit" /> */}
    </li>
  )
}
