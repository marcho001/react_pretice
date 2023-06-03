export default function TodoItem({ content, completed }: Todo) {
  // const todoItemClassName = `
  // ${isChecked ? 'completed' : ''}
  // ${editingUuid === todoUuid ? 'editing' : ''}
  // `

  return (
    <li className="">
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{content}</label>
        <button className="destroy"></button>
      </div>
      {/* <input className="edit" value="" /> */}
    </li>
  )
}
