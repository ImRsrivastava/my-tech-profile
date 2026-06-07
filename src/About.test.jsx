import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import About from './components/About'

test('renders about section', () => {
  render(<About />)

  expect(screen.getByText('About')).toBeInTheDocument()

  expect(
    screen.getByText(/AWS Cloud Engineer with hands-on experience/i)
  ).toBeInTheDocument()

  expect(
    screen.getByText(/Senior Backend & AWS DevOps Engineer/i)
  ).toBeInTheDocument()
})