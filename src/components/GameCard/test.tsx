import { render, screen, fireEvent } from 'utils/test-utils'

import GameCard from '.'

const props = {
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 235
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = render(<GameCard {...props} />)

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

    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )

    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    // renderiza o componente
    render(<GameCard {...props} />)
    // preço não tenha line-through
    expect(screen.getByText('$235.00')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
    // preço tenha o background secundário
    expect(screen.getByText('$235.00')).toHaveStyle({
      'background-color': '#3CD3C1'
    })
  })

  it('should render a line-through in price when promotional', () => {
    // renderiza o componente (COM promotionalPrice) // 200 reais // 15 reais
    const promotionalPrice = 15
    render(<GameCard {...props} promotionalPrice={promotionalPrice} />)
    // preço tenha line-through (200)
    expect(screen.getByText('$235.00')).toHaveStyle({
      'text-decoration': 'line-through'
    })
    // preço novo promocional não vai ter line-through (15)
    expect(screen.getByText('$15.00')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    render(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call onFav method when favorite is clicked', () => {
    const onFav = jest.fn()
    render(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0])

    expect(onFav).toBeCalled()
  })

  it('should render Ribbon', () => {
    render(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
    expect(ribbon).toBeInTheDocument()
  })
})
