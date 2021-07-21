import {render, screen} from '@testing-library/react'
import { Hello } from './Hello'

test('Should show Hello World', () => {
  render(<Hello />)
  const div = screen.getByText(/hello world/i)
  expect(div).toBeInTheDocument()
})