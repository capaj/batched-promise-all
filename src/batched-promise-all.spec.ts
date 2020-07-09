import { batchedPromiseAll } from './batched-promise-all'

const delay = () => {
  return new Promise((r) => setTimeout(r, 20))
}

describe('batchedPromiseAll', () => {
  it('awaits all promises', async () => {
    const testPromiseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    const hrstart = process.hrtime()
    const r = await batchedPromiseAll(
      testPromiseArr,
      async (item, index) => {
        await delay()
        return [item, index]
      },
      2
    )
    const hrend = process.hrtime(hrstart)

    const milis = hrend[1] / 1000000
    console.info('Execution time (hr): %ds %dms', hrend[0], milis)

    expect(r).toMatchInlineSnapshot(`
      Array [
        Array [
          "a",
          0,
        ],
        Array [
          "b",
          1,
        ],
        Array [
          "c",
          2,
        ],
        Array [
          "d",
          3,
        ],
        Array [
          "e",
          4,
        ],
        Array [
          "f",
          5,
        ],
        Array [
          "g",
          6,
        ],
      ]
    `)

    expect(milis).toBeGreaterThan(80)
  })
})
