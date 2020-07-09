export function chunkArray(array: any[], chunkSize: number) {
  const resultArray: any[] = []
  for (let i = 0, len = array.length; i < len; i += chunkSize) {
    resultArray.push(array.slice(i, i + chunkSize))
  }
  return resultArray
}
