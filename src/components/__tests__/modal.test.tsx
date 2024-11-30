import { render, screen } from '@testing-library/react'
import { Modal } from '../modals/Modal'
import { act } from 'react'

describe('Modal Component', () => {
  test('does render the modal', async () => {
    await act(async () => {
      render(<Modal />)
    })

    const modalElement = screen.getByRole('dialog')
    expect(modalElement).toBeInTheDocument()
  })

  test('displays the correct title', async () => {
    const title = 'Deactivate account'
    await act(async () => {
      render(<Modal />)
    })
    const modalTitle = screen.getByText(title)
    expect(modalTitle).toBeInTheDocument()
  })
})
