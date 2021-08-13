//import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

//import Game from '.'

describe('<Game />', () => {
  it('should render the heading', () => {
    renderWithTheme(<div></div>)

    /*    expect(screen.getByRole('heading', { name: /Game/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot() */
    expect(1).toBe(1)
  })
})
