import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import About from './components/About'

test('renders about section', async () => {
  render(<About />)

  expect(screen.getByText('About')).toBeInTheDocument()
  expect(screen.getByText(/AWS Cloud Engineer/i)).toBeInTheDocument()
  expect(screen.getByText(/Senior Backend Engineer/i)).toBeInTheDocument()
})