import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('renders welcome text', () => {
  const { getByText } = render(<App />)
  const linkElement = getByText('Welcome to the MTG Price UI!')
  expect(linkElement).toBeInTheDocument()
})
