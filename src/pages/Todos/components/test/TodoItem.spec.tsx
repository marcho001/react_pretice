import { render, fireEvent, waitFor } from '@testing-library/react'
import TodoItem from '../TodoItem'

describe('Layout', () => {
  const toggleFn = jest.fn()
  const removeFn = jest.fn()
  const data = {
    id: '123',
    completed: false,
    content: 'test',
    onRemoveTodo: removeFn,
    onToggleCompleted: toggleFn
  }

  it('Renders todo item correctly', () => {
    const { getByText } = render(<TodoItem {...data} />)

    const todoItem = getByText('test')
    expect(todoItem).toBeInTheDocument()
  })
  it('should show destroy icon when hover', () => {
    const { getByText, getByRole } = render(<TodoItem {...data} />)
    const todoItem = getByText('test')
    fireEvent.mouseOver(todoItem)
    const destroyBtn = getByRole('button')
    expect(destroyBtn).toBeInTheDocument()
  })
  it('should call onToggleCompleted when click checkbox', () => {
    const { getByTestId } = render(<TodoItem {...data} />)
    const checkbox = getByTestId('todo-item-checkbox')
    fireEvent.click(checkbox)
    expect(toggleFn).toHaveBeenCalled()
  })
  it('should call onRemoveTodo when click destroy button', () => {
    const { getByRole } = render(<TodoItem {...data} />)
    const destroyBtn = getByRole('button')
    fireEvent.click(destroyBtn)
    waitFor(() => {
      expect(data.onRemoveTodo).toHaveBeenCalled()
    })
  })
})
