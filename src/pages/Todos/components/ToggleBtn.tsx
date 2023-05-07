import { useState } from 'react'

export default function ToggleBtn() {
  return (
    <>
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  )
}
