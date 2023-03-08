import { useState } from 'react'

interface ToggleBtnParams {
  handleToggleAll: (isChecked: boolean) => void
}

export default function ToggleBtn({ handleToggleAll }: ToggleBtnParams) {
  const [isToggle, setIsToggle] = useState(false)
  const doToggle = () => {
    setIsToggle(!isToggle)
    handleToggleAll(isToggle)
  }
  return (
    <>
      <input id="toggle-all" className="toggle-all" type="checkbox" onChange={doToggle} />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  )
}
