import { chunkArray } from './chunkArray'

describe('chunk array', () => {
  it('should chunk', async () => {
    expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 3)).toMatchSnapshot()
  })
  it('should not fail on empty array', async () => {
    expect(chunkArray([], 3)).toMatchSnapshot()
  })
})
