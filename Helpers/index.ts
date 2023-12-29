const generateRandomArray = (): number[] => {
  return Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1)
}

export { generateRandomArray }
