import { render } from '@redwoodjs/testing/web'

import CurrentVibePage from './CurrentVibePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CurrentVibePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CurrentVibePage />)
    }).not.toThrow()
  })
})
