import { render, fireEvent, waitFor } from '@testing-library/react'
import TodoItem from '../TodoItem'

describe('', () => {
  const toggleFn = jest.fn()
  const removeFn = jest.fn()
  const focusFn = jest.fn()
  const editContentFn = jest.fn()
  const submitEditingFn = jest.fn()
  const data = {
    id: '123',
    completed: false,
    content: 'test',
    editingContent: '',
    onRemoveTodo: removeFn,
    onToggleCompleted: toggleFn,
    onEditing: focusFn,
    editingUuid: '',
    onEditTodoContent: editContentFn,
    onSubmitEditing: submitEditingFn
  }

  describe('Layout', () => {
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

  describe('Edit Todo', () => {
    it('should call onEditing when double click', () => {
      const { getByTestId } = render(<TodoItem {...data} />)
      const todoItem = getByTestId('todo-item')
      fireEvent.doubleClick(todoItem)
      expect(focusFn).toHaveBeenCalled()
    })
    it('should show input when editing', () => {
      const { getByTestId } = render(<TodoItem {...data} editingUuid="123" />)
      const input = getByTestId('todo-item-input')
      expect(input).toBeInTheDocument()
    })
    it('should show todo content in input when editing', () => {
      const { getByTestId } = render(<TodoItem {...data} content="tets" editingUuid="123" />)
      const todoItem = getByTestId('todo-item')
      fireEvent.doubleClick(todoItem)
      const input = getByTestId('todo-item-input')
      waitFor(() => {
        expect(input).toHaveValue('tets')
      })
    })
    it('show update content when type something', () => {
      const { getByTestId } = render(<TodoItem {...data} content="tets" editingUuid="123" />)
      const todoItem = getByTestId('todo-item')
      fireEvent.doubleClick(todoItem)
      const input = getByTestId('todo-item-input') as HTMLInputElement
      waitFor(() => {
        expect(input).toHaveValue('tets')
      })

      input.value = '12345'
      waitFor(() => {
        expect(input).toHaveValue('12345')
      })
    })
    it('should show new content after submit editing', () => {
      const { getByTestId } = render(<TodoItem {...data} content="tets" editingUuid="123" />)
      const todoItem = getByTestId('todo-item')
      fireEvent.doubleClick(todoItem)
      const input = getByTestId('todo-item-input') as HTMLInputElement
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

      expect(submitEditingFn).toHaveBeenCalled()
    })
  })
})
