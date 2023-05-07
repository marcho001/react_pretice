export default function TodoItem() {
  // const todoItemClassName = `
  // ${isChecked ? 'completed' : ''}
  // ${editingUuid === todoUuid ? 'editing' : ''}
  // `

  return (
    <li className="">
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>name</label>
        <button className="destroy"></button>
      </div>
      <input className="edit" value="" />
    </li>
  )
}
