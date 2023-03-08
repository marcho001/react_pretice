import { useState } from 'react'
export default function useEditTodo() {
  const [editingUuid, setEditingUuid] = useState('')
  const [editContent, setEditContent] = useState('')
  const setEditingTodo = (uuid: string, content: string) => {
    setEditingUuid(uuid)
    setEditContent(content)
  }

  return { editingUuid, setEditingTodo, editContent, setEditContent }
}
