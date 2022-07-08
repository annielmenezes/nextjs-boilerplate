import { render, screen } from '@testing-library/react'

import Main from '.'

describe('Component: <Main />', () => {
  it('shold render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /NextJS Boilerplate/i })
    ).toBeInTheDocument()
  })
})
