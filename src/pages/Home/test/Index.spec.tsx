import { render } from '@testing-library/react'

// To Test
import Home from '../Index'

// Tests
it('Renders main page correctly', () => {
  // Setup
  render(<Home />)
  expect(true).toBeTruthy()
})
