import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 200,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    // renderiza o componente
    renderWithTheme(<GameCard {...props} />)
    // preço não tenha line-through
    expect(screen.getByText(props.price)).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
    // preço tenha o background secundário
    expect(screen.getByText(props.price)).toHaveStyle({
      'background-color': '#3CD3C1'
    })
  })

  it('should render a line-through in price when promotional', () => {
    // renderiza o componente (COM promotionalPrice) // 200 reais // 15 reais
    const promotionalPrice = 'R$ 15,00'
    renderWithTheme(<GameCard {...props} promotionalPrice={promotionalPrice} />)
    // preço tenha line-through (200)
    expect(screen.getByText(props.price)).toHaveStyle({
      'text-decoration': 'line-through'
    })
    // preço novo promocional não vai ter line-through (15)
    expect(screen.getByText(promotionalPrice)).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })
})
