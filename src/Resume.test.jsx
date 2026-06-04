import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import Resume from './components/Resume'

test('renders resume section', () => {
  render(<Resume />)

  expect(screen.getByText('Resume')).toBeInTheDocument()
  expect(screen.getByText('Professional Summary')).toBeInTheDocument()
  expect(screen.getByText('Professional Experience')).toBeInTheDocument()
})