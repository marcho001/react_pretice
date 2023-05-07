import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

// To Test
import Home from '../Index'

// Tests
it('Renders main page correctly', () => {
  // Setup
  render(<Home />)
  expect(true).toBeTruthy()
})
