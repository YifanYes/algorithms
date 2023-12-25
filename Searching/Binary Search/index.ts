const array = [
  4, 8, 12, 15, 18, 20, 23, 25, 27, 30, 32, 35, 39, 40, 42, 45, 48, 50, 53, 56, 58, 61, 64, 68, 71, 74, 76, 78, 81, 84,
  86, 89, 92, 95, 98, 100, 103, 106, 108, 111, 114, 117, 120, 122, 126, 128, 131, 133, 135, 138, 141, 145, 148, 150,
  153, 156, 159, 161, 165, 167, 170, 174, 177, 180, 182, 185, 189, 192, 195, 197, 200, 203, 205, 208, 211, 214, 217,
  220, 222, 226, 230, 232, 235, 237, 240, 244, 247, 249, 251, 254, 256, 259, 263, 266, 270, 272, 275, 279, 281, 284,
  288, 291, 295, 297, 300,
]

// Iterative approach
function binarySearch(target: number, array: number[]): string {
  if (!array.length) return 'The list is empty'

  let firstIndex = 0
  let lastIndex = array.length - 1

  while (firstIndex <= lastIndex) {
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2)

    if (array[middleIndex] === target) {
      return `Element ${target} at index ${middleIndex}`
    }

    array[middleIndex] < target ? (firstIndex = middleIndex + 1) : (lastIndex = middleIndex - 1)
  }

  return `Element ${target} not found`
}
