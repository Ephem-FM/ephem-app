import { render } from '@redwoodjs/testing/web'

import DisclaimerPage from './DisclaimerPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DisclaimerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DisclaimerPage />)
    }).not.toThrow()
  })
})
