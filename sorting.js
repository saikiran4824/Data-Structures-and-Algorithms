// Sorting algorithms are used to arrange elements in a specific order (ascending or descending). Here’s a comprehensive guide to various sorting algorithms, their implementations in JavaScript, and their explanations.

// 1. Bubble Sort
// Concept:
// Repeatedly swaps adjacent elements if they are in the wrong order.

// The largest element "bubbles up" to the end in each pass.

// Time Complexity:
// Best case (already sorted): O(n)

// Average case: O(n²)

// Worst case: O(n²)

// Code:
// js

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
                swapped = true;
            }
        }
        if (!swapped) break; // Stop if no swaps
    }
    return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2])); // Output: [2, 3, 4, 5, 8]


// 2. Selection Sort
// Concept:
// Finds the smallest element and swaps it with the first element.

// Repeats for the next positions.

// Time Complexity:
// Best/Average/Worst case: O(n²)


function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // Find min index
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Swap
    }
    return arr;
}

console.log(selectionSort([64, 25, 12, 22, 11])); // Output: [11, 12, 22, 25, 64]



// 3. Insertion Sort
// Concept:
// Builds the sorted array one element at a time.

// Shifts elements to insert the current element at the right position.

// Time Complexity:
// Best case (already sorted): O(n)

// Worst/Average case: O(n²)

// Code:
// js



function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // Shift elements
            j--;
        }
        arr[j + 1] = key; // Insert key
    }
    return arr;
}

console.log(insertionSort([9, 5, 1, 4, 3])); // Output: [1, 3, 4, 5, 9]



// 4. Merge Sort (Divide and Conquer)
// Concept:
// Recursively splits the array into halves, sorts them, and merges them.

// Time Complexity:
// Best/Average/Worst case: O(n log n)

// Code:
// js



function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }
    return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10])); // Output: [3, 9, 10, 27, 38, 43, 82]


// 5. Quick Sort (Divide and Conquer)
// Concept:
// Selects a pivot element.

// Partitions the array into elements less than and greater than the pivot.

// Recursively sorts the partitions.

// Time Complexity:
// Best/Average case: O(n log n)

// Worst case (poor pivot choice): O(n²)

// Code:
// js


function quickSort(arr) {
    if (arr.length <= 1) return arr; // Base case

    let pivot = arr[arr.length - 1]; // Choosing last element as pivot
    let left = arr.filter(el => el < pivot);
    let right = arr.filter(el => el > pivot);
    let middle = arr.filter(el => el === pivot);

    return [...quickSort(left), ...middle, ...quickSort(right)];
}

console.log(quickSort([10, 7, 8, 9, 1, 5])); // Output: [1, 5, 7, 8, 9, 10]


// 6. Counting Sort (For Small Integers)
// Concept:
// Counts occurrences of each number.

// Constructs the sorted array using this count.

// Time Complexity: O(n + k), where k is the range of input values.
// Code:
// js



function countingSort(arr) {
    let max = Math.max(...arr);
    let count = new Array(max + 1).fill(0);
    let output = [];

    for (let num of arr) count[num]++;
    
    for (let i = 0; i < count.length; i++) {
        while (count[i]-- > 0) {
            output.push(i);
        }
    }
    
    return output;
}

console.log(countingSort([4, 2, 2, 8, 3, 3, 1])); // Output: [1, 2, 2, 3, 3, 4, 8]


// 7. Radix Sort (For Large Integers)
// Concept:
// Sorts numbers digit by digit, using Counting Sort as a subroutine.

// Time Complexity: O(nk), where k is the number of digits.
// Code:
// js


function radixSort(arr) {
    let maxNum = Math.max(...arr);
    let digitPlace = 1;

    while (Math.floor(maxNum / digitPlace) > 0) {
        arr = countingSortByDigit(arr, digitPlace);
        digitPlace *= 10;
    }

    return arr;
}

function countingSortByDigit(arr, place) {
    let output = new Array(arr.length).fill(0);
    let count = new Array(10).fill(0);

    for (let num of arr) {
        let digit = Math.floor(num / place) % 10;
        count[digit]++;
    }

    for (let i = 1; i < 10; i++) count[i] += count[i - 1];

    for (let i = arr.length - 1; i >= 0; i--) {
        let digit = Math.floor(arr[i] / place) % 10;
        output[--count[digit]] = arr[i];
    }

    return output;
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66])); // Output: [2, 24, 45, 66, 75, 90, 170, 802]



// Conclusion
// O(n²) Algorithms: Bubble, Selection, Insertion.

// O(n log n) Algorithms: Merge, Quick.

// O(n + k) Algorithms: Counting, Radix.