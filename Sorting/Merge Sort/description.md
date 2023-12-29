# Merge Sort

Merge sort works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.

### Steps

1. Initially divide the array into two equal halves.
2. These subarrays are further divided into two halves. Now they become array of unit length that can no longer be divided and array of unit length are always sorted.
3. These sorted subarrays are merged together, and we get bigger sorted subarrays.
4. This merging process is continued until the sorted array is built from the smaller subarrays.

### Time Complexity:

**Best Case**: `O(n log n)`

**Average Case**: `O(n log n)`

**Worst Case**: `O(n log n)`

**Auxiliary Space**: `O(n)`, all elements are copied into an auxiliary array.

### Advantages of Merge Sort:

- Stability: Merge sort is a stable sorting algorithm, which means it maintains the relative order of equal elements in the input array. Guaranteed worst-case performance: Merge sort has a worst-case time complexity of O(n log n), which means it performs well even on large datasets.
- Parallelizable: Merge sort is a naturally parallelizable algorithm, which means it can be easily parallelized to take advantage of multiple processors or threads.

### Drawbacks of Merge Sort:

- Space complexity: Merge sort requires additional memory to store the merged sub-arrays during the sorting process.
- Not in-place: Merge sort is not an in-place sorting algorithm, which means it requires additional memory to store the sorted data. This can be a disadvantage in applications where memory usage is a concern.
- Not always optimal for small datasets: For small datasets, Merge sort has a higher time complexity than some other sorting algorithms, such as insertion sort. This can result in slower performance for very small datasets.

### Applications of Merge Sort:

- Sorting large datasets: Merge sort is particularly well-suited for sorting large datasets due to its guaranteed worst-case time complexity of `O(n log n)`.
- External sorting: Merge sort is commonly used in external sorting, where the data to be sorted is too large to fit into memory.
- Custom sorting: Merge sort can be adapted to handle different input distributions, such as partially sorted, nearly sorted, or completely unsorted data.
- Inversion Count Problem (indicates – how far (or close) the array is from being sorted).
