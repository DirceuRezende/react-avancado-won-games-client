import { render, screen } from '@testing-library/react'

import Container from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    render(<Container />)

    expect(
      screen.getByRole('heading', { name: /Container/i })
    ).toBeInTheDocument()
  })
})
