import React, { createFactory, useState } from 'react'

export default function Header() {
  return (
    <header className="header pt-30">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" />
    </header>
  )
}
