import { render } from '@redwoodjs/testing/web'

import InputPrefsPage from './InputPrefsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('InputPrefsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<InputPrefsPage />)
    }).not.toThrow()
  })
})
