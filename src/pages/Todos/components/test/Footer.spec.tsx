import { render } from '@testing-library/react'

import Footer from '../Footer'

describe('Layout', () => {
  it('Renders footer correctly', () => {
    // Setup
    const { getByText } = render(<Footer />)
    // Exercise
    const element = getByText('Double-click to edit a todo')
    // Verify
    expect(element).toBeInTheDocument()
  })
})
