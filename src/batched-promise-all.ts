import { chunkArray } from './chunkArray'

export const batchedPromiseAll = async <T>(
  promiseArr: T[],
  iterationCb: (item: T, index: number) => any,
  batchSize: number
) => {
  const chunkedPromiseArr = chunkArray(promiseArr, batchSize)
  let result: any[] = []
  let currentIndex = -1
  for (const chunk of chunkedPromiseArr) {
    const chunkResult = await Promise.all(
      chunk.map((item: T) => {
        currentIndex++
        return iterationCb(item, currentIndex)
      })
    )
    result = result.concat(chunkResult)
  }
  return result
}
