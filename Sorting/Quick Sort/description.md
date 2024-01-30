# Quick Sort

Quick Sort is a sorting algorithm based on the Divide and Conquer algorithm that picks an element as a pivot and partitions the given array around the picked pivot by placing the pivot in its correct position in the sorted array.

### Steps

1. Choose a pivot.
2. Partition the array, rearranging the elements such that all elements smaller than the pivot are on its left, and all elements greater are on its right. The pivot should be in its final sorted position.
3. Recursively sort sub-arrays.
4. Combine the results.

### Time Complexity:

**Best Case**: `O(n log n)`

**Average Case**: `O(n log n)`

**Worst Case**: `O(n^2)`

**Auxiliary Space**: `O(1)` without considering the recursive stack space, which in the worst case it could make `O(n)`

### Advantages of Quick Sort:

- It is a divide-and-conquer algorithm that makes it easier to solve problems.
- It is efficient on large data sets.
- It has a low overhead, as it only requires a small amount of memory to function.

### Drawbacks of Quick Sort:

- It has a worst-case time complexity of `O(n^2)`, which occurs when the pivot is chosen poorly.
- It is not a good choice for small data sets.
- It is not a stable sort, meaning that if two elements have the same key, their relative order will not be preserved in the sorted output in case of quick sort, because here we are swapping elements according to the pivot’s position (without considering their original positions).
