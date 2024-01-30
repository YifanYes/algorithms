import { generateRandomArray } from '../../Helpers'

const array = generateRandomArray()

function quickSort(array: number[]): number[] {
  if (array.length <= 1) return array

  const [pivot, ...rest] = array
  const lessThanPivot = rest.filter(value => value <= pivot)
  const greaterThanPivot = rest.filter(value => value > pivot)

  return [...quickSort(lessThanPivot), pivot, ...quickSort(greaterThanPivot)]
}

console.log(quickSort(array))
