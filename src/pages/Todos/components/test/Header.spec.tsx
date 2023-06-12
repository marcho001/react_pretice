import { act, fireEvent, render, waitFor } from '@testing-library/react'
import Header from '../Header'

describe('Layout', () => {
  it('Renders header correctly', () => {
    const addTodo = jest.fn()

    const { getByText, queryByPlaceholderText } = render(<Header onSubmitTodo={addTodo} />)
    const headerText = getByText('todos')
    expect(headerText).toBeInTheDocument()

    const input = queryByPlaceholderText('What needs to be done?')
    expect(input).toBeInTheDocument()
  })
})

describe('type into input and submit', () => {
  it('should update input value', () => {
    const addTodo = jest.fn()
    const { queryByPlaceholderText } = render(<Header onSubmitTodo={addTodo} />)
    const input = queryByPlaceholderText('What needs to be done?') as HTMLInputElement
    input.value = 'test'
    expect(input.value).toBe('test')
  })
  it('should add todo when press enter', async () => {
    const addTodo = jest.fn()
    const { queryByPlaceholderText, getByText } = render(<Header onSubmitTodo={addTodo} />)
    const input = queryByPlaceholderText('What needs to be done?') as HTMLInputElement
    input.value = 'test'
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    waitFor(() => {
      expect(addTodo).toHaveBeenCalled()
      expect(getByText('test')).toBeInTheDocument()
    })
  })
  it('should not add todo when press enter with empty input', async () => {
    const addTodo = jest.fn()
    const { queryByPlaceholderText, queryByText } = render(<Header onSubmitTodo={addTodo} />)
    const input = queryByPlaceholderText('What needs to be done?') as HTMLInputElement
    input.value = ''
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    waitFor(() => {
      expect(addTodo).not.toHaveBeenCalled()
      expect(queryByText('test')).not.toBeInTheDocument()
    })
  })
})
