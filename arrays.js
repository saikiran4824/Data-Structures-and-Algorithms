// 1. Find the Second Largest Number in an Array
// This function finds the second largest number in an array.
// It iterates through the array and updates the largest and secondLargest values accordingly.
function secondLargest(arr) {
    if (arr.length < 2) return "Array should have at least two elements"; // Edge case check
    
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let num of arr) {
        if (num > largest) { // Update largest and secondLargest
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) { // Update secondLargest if needed
            secondLargest = num;
        }
    }

    return secondLargest === -Infinity ? "No second largest found" : secondLargest;
}

//console.log(secondLargest([10, 20, 4, 45, 99, 99])); // Output: 45

// 2. Find Missing Number in an Array
// This function finds the missing number in an array of n distinct numbers from 1 to n+1.
// It calculates the expected sum using the formula (n*(n+1))/2 and subtracts the actual sum.
function findMissingNumber(arr) {
    let n = arr.length + 1;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    
    
    return expectedSum - actualSum; // The missing number
}

//console.log(findMissingNumber([1, 2, 3, 5])); // Output: 4

// 3. Find the Majority Element (Appears More than n/2 Times)
// This function uses the Boyer-Moore Voting Algorithm to find the majority element in an array.
function majorityElement(arr) {
    let candidate = null, count = 0;
    
    for (let num of arr) {
        if (count === 0) {
            candidate = num; // Set new candidate
        }
        count += (num === candidate) ? 1 : -1; // Increase or decrease count
    }
    
    return candidate;
}

//console.log(majorityElement([3, 3, 4, 2, 3, 3, 3])); // Output: 3

// 4. Find the Subarray with the Maximum Sum (Kadane’s Algorithm)
// This function finds the contiguous subarray with the maximum sum using Kadane’s Algorithm.
function maxSubarraySum(arr) {
    let maxSoFar = arr[0]; // Stores max sum found so far
    let maxEndingHere = arr[0]; // Stores max sum ending at current position

    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}
//console.log(maxSubarraySum([1, 1,-9])); // Output: 6

// 5. Find All Pairs in an Array That Sum to a Target
// This function finds all unique pairs in an array that sum to a given target using a Set.
function pairSum(arr, target) {
    let seen = new Set(); // Stores numbers we have seen
    let pairs = [];

    for (let num of arr) {
        let complement = target - num; // Find the complement

        if (seen.has(complement)) { // If complement is found, store the pair
            pairs.push([num, complement]);
            console.log([num, complement]);
            
        }
        seen.add(num);
    
    }
    return pairs;
}
//console.log(pairSum([6, 7, 4, -1, 8, 5], 6)); // Output: [[4, 2], [5, 1]]

// 6. Find the Intersection of Two Arrays
// This function finds the common elements between two arrays using a Set.
function arrayIntersection(arr1, arr2) {
    let set1 = new Set(arr1); // Store elements of arr1 in a Set
    //console.log(set1);
    
    let result = arr2.filter(num => set1.has(num)); // Filter elements present in both arrays
    //console.log(result);
    
    return [...new Set(result)]; // Remove duplicates
}

//console.log(arrayIntersection([1, 2, 2, 3, 4], [2, 2, 4, 5])); // Output: [2, 4]

// 7. Rotate an Array to the Right by k Steps
// This function rotates an array to the right by k steps using reversal.
function rotateArray(arr, k) {
    k = k % arr.length; // Handle cases where k > array length
    arr.reverse(); // Reverse entire array
    arr.splice(0, k, ...arr.slice(0, k).reverse()); // Reverse first k elements
    
    arr.splice(k, arr.length - k, ...arr.slice(k).reverse()); // Reverse remaining elements
    
    return arr;
}

//console.log(rotateArray([1, 2, 3, 4, 5, 6], 2)); // Output: [5, 6, 1, 2, 3, 4]

// 8. Find the First Non-Repeating Element
// This function finds the first non-repeating element in an array.
function firstNonRepeating(arr) {
    let freq = {}; // Stores frequency count of each element


    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1; // Increment count for each element        
    }

    for (let num of arr) {
        if (freq[num] === 1) return num; // Return the first element with count 1
    
    }

    return null; // If no non-repeating element is found
}

console.log(firstNonRepeating([4, 5, 1, 2, 0,5, 4, 1, 2,0])); // Output: 5
