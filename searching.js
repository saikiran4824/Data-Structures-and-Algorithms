// Searching algorithms help find an element in a given dataset efficiently. Below is a comprehensive guide covering different searching techniques with JavaScript implementations and detailed explanations.

// 1. Linear Search (Brute Force)
// Concept:
// Traverse the array one element at a time and check if it matches the target value.

// Simple but inefficient for large datasets.

// Time Complexity:
// Best case (element at start): O(1)

// Worst/Average case: O(n)

// Code:
// js

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i; // Found, return index
    }
    return -1; // Not found
}

console.log(linearSearch([10, 20, 30, 40, 50], 30)); // Output: 2
console.log(linearSearch([10, 20, 30, 40, 50], 100)); // Output: -1


// 📌 Use Case: Works well for small or unsorted datasets.

// 2. Binary Search (Divide & Conquer)
// Concept:
// Prerequisite: The array must be sorted.

// Repeatedly divide the array in half until the target is found.

// Time Complexity:
// Best case: O(1)

// Average/Worst case: O(log n)

// Code (Iterative Approach):
// js

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid; // Found
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1; // Not found
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7)); // Output: 3

// Code (Recursive Approach):
// js

function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1; // Base case

    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) return binarySearchRecursive(arr, target, mid + 1, right);
    else return binarySearchRecursive(arr, target, left, mid - 1);
}

console.log(binarySearchRecursive([2, 4, 6, 8, 10, 12], 10)); // Output: 4


// 📌 Use Case: Fast search in sorted arrays, suitable for large datasets.

// 3. Jump Search
// Concept:
// Prerequisite: The array must be sorted.

// Divide the array into blocks of size √n and jump ahead by √n steps.

// If the target is found in a block, do a linear search within that block.

// Time Complexity:
// Best case: O(1)

// Worst case: O(√n)

// Code:
// js

function jumpSearch(arr, target) {
    let n = arr.length;
    let step = Math.floor(Math.sqrt(n)); // Block size
    let prev = 0;

    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));

        if (prev >= n) return -1; // Not found
    }

    while (arr[prev] < target) {
        prev++;
        if (prev === Math.min(step, n)) return -1;
    }

    return arr[prev] === target ? prev : -1;
}

console.log(jumpSearch([1, 3, 5, 7, 9, 11, 13], 9)); // Output: 4


// 📌 Use Case: Works well for large sorted arrays where binary search isn't ideal.

// 4. Interpolation Search
// Concept:
// Prerequisite: The array must be sorted and uniformly distributed.

// Instead of dividing the array in half, it estimates the target’s position using a formula.

// Time Complexity:
// Best case: O(1)

// Worst case (skewed distribution): O(n)

// Code:
// js


function interpolationSearch(arr, target) {
    let low = 0, high = arr.length - 1;

    while (low <= high && target >= arr[low] && target <= arr[high]) {
        let pos = low + Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

        if (arr[pos] === target) return pos;
        else if (arr[pos] < target) low = pos + 1;
        else high = pos - 1;
    }

    return -1; // Not found
}

console.log(interpolationSearch([10, 20, 30, 40, 50, 60], 40)); // Output: 3


// 📌 Use Case: Efficient for uniformly distributed large datasets.

// 5. Exponential Search
// Concept:
// Prerequisite: The array must be sorted.

// Start with a small search range and double it exponentially until the target is within range.

// Then use binary search within that range.

// Time Complexity:
// Best case: O(1)

// Worst case: O(log n)

// Code:
// js

function exponentialSearch(arr, target) {
    if (arr[0] === target) return 0; // First element check

    let i = 1;
    while (i < arr.length && arr[i] <= target) {
        i *= 2;
    }

    return binarySearch(arr, target, i / 2, Math.min(i, arr.length - 1));
}

function binarySearch(arr, target, left, right) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return -1;
}

console.log(exponentialSearch([2, 3, 4, 10, 40, 50, 60], 10)); // Output: 3


// 📌 Use Case: Useful when the element is near the beginning of a sorted array.

// 6. Ternary Search
// Concept:
// Prerequisite: The array must be sorted.

// Similar to binary search but divides the array into three parts instead of two.

// Time Complexity:
// Best case: O(1)

// Worst case: O(log₃ n)

// Code:
// js


function ternarySearch(arr, left, right, target) {
    if (left > right) return -1;

    let mid1 = left + Math.floor((right - left) / 3);
    let mid2 = right - Math.floor((right - left) / 3);

    if (arr[mid1] === target) return mid1;
    if (arr[mid2] === target) return mid2;

    if (target < arr[mid1]) return ternarySearch(arr, left, mid1 - 1, target);
    else if (target > arr[mid2]) return ternarySearch(arr, mid2 + 1, right, target);
    else return ternarySearch(arr, mid1 + 1, mid2 - 1, target);
}

console.log(ternarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 0, 8, 5)); // Output: 4

// 📌 Use Case: Slightly more efficient than binary search for some cases.

