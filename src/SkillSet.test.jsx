import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import SkillSet from './components/SkillSet'

test('renders skill section', () => {
  render(<SkillSet />)

  expect(screen.getByText('Skills')).toBeInTheDocument()
  expect(screen.getByText('PHP')).toBeInTheDocument()
  expect(screen.getByText('Laravel')).toBeInTheDocument()
  expect(screen.getByText('Terraform')).toBeInTheDocument()
})