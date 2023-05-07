import { render } from '@testing-library/react'
import Header from '../Header'

describe('Layout', () => {
  it('Renders header correctly', () => {
    const { getByText, queryByPlaceholderText } = render(<Header />)
    const headerText = getByText('todos')
    expect(headerText).toBeInTheDocument()

    const input = queryByPlaceholderText('What needs to be done?')
    expect(input).toBeInTheDocument()
  })
})
