import { generateRandomArray } from '../../Helpers'

type Split = {
  leftHalf: number[]
  rightHalf: number[]
}

const array = generateRandomArray()

function mergeSort(array: number[]): number[] {
  if (array.length <= 1) return array

  const { leftHalf, rightHalf } = split(array)
  const sortedLeft = mergeSort(leftHalf)
  const sortedRight = mergeSort(rightHalf)

  return merge(sortedLeft, sortedRight)
}

function split(array: number[]): Split {
  const midpoint = Math.floor(array.length / 2)
  return {
    leftHalf: array.slice(0, midpoint),
    rightHalf: array.slice(midpoint, array.length),
  }
}

function merge(leftHalf: number[], rightHalf: number[]): number[] {
  const merged = []
  let i = 0
  let j = 0

  while (i < leftHalf.length && j < rightHalf.length) {
    if (leftHalf[i] < rightHalf[j]) {
      merged.push(leftHalf[i])
      i++
    } else {
      merged.push(rightHalf[j])
      j++
    }
  }

  while (i < leftHalf.length) {
    merged.push(leftHalf[i])
    i++
  }

  while (j < rightHalf.length) {
    merged.push(rightHalf[j])
    j++
  }

  return merged
}
