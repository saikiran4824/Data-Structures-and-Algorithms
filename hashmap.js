// 1️⃣ Problem: Count Word Frequency
// Description: Given a string, count the frequency of each word.

// Solution Using HashMap

function wordFrequency(str) {
    let words = str.split(" ");
    let hashMap = new Map();

    for (let word of words) {
        word = word.toLowerCase(); // Normalize to lowercase
        hashMap.set(word, (hashMap.get(word) || 0) + 1);
    }

    return hashMap;
}

// Example Usage
let text = "hello world hello everyone";
console.log(wordFrequency(text)); 
// Output: Map { 'hello' => 2, 'world' => 1, 'everyone' => 1 }
// ✅ Explanation:

// We split the string into words.

// We use a Map to store word counts.

// If the word exists, increment its count; otherwise, initialize it to 1.



// 2️⃣ Problem: Find First Non-Repeating Character
// Description: Given a string, find the first character that does not repeat.

// Solution Using HashMap
// javascript

function firstNonRepeatingChar(str) {
    let hashMap = new Map();

    // Step 1: Store frequency of each character
    for (let char of str) {
        hashMap.set(char, (hashMap.get(char) || 0) + 1);
    }

    // Step 2: Find the first character with frequency 1
    for (let char of str) {
        if (hashMap.get(char) === 1) {
            return char;
        }
    }

    return null; // No unique character found
}

// Example Usage
console.log(firstNonRepeatingChar("aabbcde")); // Output: 'c'
console.log(firstNonRepeatingChar("aabbcc"));  // Output: null
// ✅ Explanation:

// First, count the occurrences of each character.

// Then, find the first character with a count of 1.


// 3️⃣ Problem: Two Sum (Find Two Numbers That Add Up to Target)
// Description: Given an array and a target sum, find two numbers that add up to the target.

// Solution Using HashMap
// javascript

function twoSum(nums, target) {
    let hashMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];

        if (hashMap.has(complement)) {
            return [hashMap.get(complement), i]; // Return the indices
        }

        hashMap.set(nums[i], i);
    }

    return []; // No pair found
}

// Example Usage
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1] (2 + 7 = 9)
console.log(twoSum([3, 2, 4], 6));      // Output: [1, 2] (2 + 4 = 6)
// ✅ Explanation:

// Store each number's index in the HashMap.

// Check if the complement (target - current number) exists.

// 4️⃣ Problem: Check If Array Has Duplicates
// Description: Given an array, check if it contains duplicate elements.

// Solution Using HashMap
// javascript

function containsDuplicate(nums) {
    let hashMap = new Set();

    for (let num of nums) {
        if (hashMap.has(num)) {
            return true; // Duplicate found
        }
        hashMap.add(num);
    }

    return false; // No duplicates
}

// Example Usage
console.log(containsDuplicate([1, 2, 3, 4]));    // Output: false
console.log(containsDuplicate([1, 2, 3, 1]));    // Output: true


// ✅ Explanation:

// Use a Set (a special HashMap-like structure) to track seen numbers.

// If a number is already in the Set, return true.

// Conclusion
// HashMaps (Objects, Maps, Sets) are powerful tools for fast lookups.

// They help solve problems efficiently in O(1) average time complexity.

// Use cases: Counting, unique value checks, fast lookups, and more!