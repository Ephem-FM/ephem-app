import { render } from '@redwoodjs/testing/web'

import CreateVibePage from './CreateVibePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CreateVibePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateVibePage />)
    }).not.toThrow()
  })
})
