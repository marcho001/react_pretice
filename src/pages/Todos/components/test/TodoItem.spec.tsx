import { render, fireEvent } from '@testing-library/react'
import TodoItem from '../TodoItem'

describe('Layout', () => {
  const fn = jest.fn()
  const data = {
    id: '123',
    completed: false,
    content: 'test'
  }

  it('Renders todo item correctly', () => {
    const { getByText } = render(<TodoItem onToggleCompleted={fn} {...data} />)

    const todoItem = getByText('test')
    expect(todoItem).toBeInTheDocument()
  })
  it('should call onToggleCompleted when click checkbox', () => {
    const { getByTestId } = render(<TodoItem onToggleCompleted={fn} {...data} />)
    const checkbox = getByTestId('todo-item-checkbox')
    fireEvent.click(checkbox)
    expect(fn).toHaveBeenCalled()
  })
})
