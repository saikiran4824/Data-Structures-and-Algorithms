// ✅ Example 1: Maximum Sum Subarray of Size k
// Problem:
// Find the maximum sum of any contiguous subarray of size k.

// 🧪 Input:
// js
// Copy
// Edit
// arr = [2, 1, 5, 1, 3, 2], k = 3
// ✅ Output:
// js
// Copy
// Edit
// 9 (subarray: [5, 1, 3])
// 🧠 Brute Force: O(n*k)
// javascript
// Copy
// Edit
// function maxSumBrute(arr, k) {
//   let maxSum = 0;
//   for (let i = 0; i <= arr.length - k; i++) {
//     let sum = 0;
//     for (let j = i; j < i + k; j++) {
//       sum += arr[j];
//     }
//     maxSum = Math.max(maxSum, sum);
//   }
//   return maxSum;
//  }

// ⚡ Sliding Window: O(n)
// javascript
// Copy
// Edit
function maxSumSliding(arr, k) {
  let windowSum = 0, maxSum = 0;

  // Initial window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  // Slide the window
  for (let end = k; end < arr.length; end++) {
    windowSum += arr[end] - arr[end - k];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;  
}

// // console.log(maxSumSliding([2, 1, 5, 1, 3, 2], 3)); // Output: 9
// // ✅ Example 2: Longest Substring Without Repeating Characters
// // Problem:
// // Given a string, return the length of the longest substring without repeating characters.

// // 🧪 Input: "abcabcbb"
// // ✅ Output: 3 (Substring: "abc")
// // 💡 Logic:
// // Use a set to track characters, and adjust the window when a duplicate is found.

// // javascript
// // Copy
// Edit
function lengthOfLongestSubstring(s) {
  let set = new Set();
  let left = 0, maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen;
}

// // console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
// // ✅ Example 3: Minimum Size Subarray Sum
// // Problem:
// // Given an array of positive integers and a target sum, return the smallest length of a contiguous subarray whose sum is at least target.

// // 🧪 Input:
// // js
// // Copy
// // Edit
// // target = 7, arr = [2,3,1,2,4,3]
// // ✅ Output: 2 (Subarray: [4,3])
// // javascript
// // Copy
// // Edit
// function minSubArrayLen(target, nums) {
//   let minLen = Infinity, sum = 0;
//   let left = 0;

//   for (let right = 0; right < nums.length; right++) {
//     sum += nums[right];

//     while (sum >= target) {
//       minLen = Math.min(minLen, right - left + 1);
//       sum -= nums[left];
//       left++;
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// }

// // console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // Output: 2
// // ✅ Example 4: Max Number of Vowels in Substring of Length k
// // Problem:
// // Return the maximum number of vowels in any substring of length k.

// // javascript
// // Copy
// // Edit
function maxVowels(s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
  let count = 0, maxCount = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) count++;
    if (i >= k && vowels.has(s[i - k])) count--;
    if (i >= k - 1) maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}
 console.log(maxVowels("abciiidef", 3)); // Output: 3 (Substring: "iii")
// // ✅ Example 1: Fixed-size Window
// // 🎯 Problem: Find the maximum average of any subarray of size k.
// // Input: nums = [1, 12, -5, -6, 50, 3], k = 4
// // Output: 12.75 (subarray: [12, -5, -6, 50])

// // ✅ Solution (Step-by-step):
// // javascript
// // Copy
// // Edit
// function findMaxAverage(nums, k) {
//   let windowSum = 0;

//   // Initial window
//   for (let i = 0; i < k; i++) {
//     windowSum += nums[i];
//   }

//   let maxAvg = windowSum / k;

//   // Slide the window
//   for (let i = k; i < nums.length; i++) {
//     windowSum += nums[i] - nums[i - k]; // slide
//     maxAvg = Math.max(maxAvg, windowSum / k);
//   }

//   return maxAvg;
// // }
// // ✅ Example 2: Longest Substring with At Most K Distinct Characters
// // Input: s = "eceba", k = 2
// // Output: 3 (substring: "ece")

// // ✅ Explanation:
// // Use a hashmap to track frequency of characters. If more than k, move left pointer.

// // javascript
// // Copy
// // Edit
function lengthOfLongestSubstringKDistinct(s, k) {
  let map = new Map();
  let left = 0, maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    map.set(char, (map.get(char) || 0) + 1);

    while (map.size > k) {
      const leftChar = s[left];
      map.set(leftChar, map.get(leftChar) - 1);
      if (map.get(leftChar) === 0) map.delete(leftChar);
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
}
// // ✅ Example 3: Permutation in String (Anagram Check)
// // Input: s1 = "ab", s2 = "eidbaooo"
// // Output: true (permutation "ba" exists in s2)

// // javascript
// // Copy
// // Edit
// function checkInclusion(s1, s2) {
//   if (s1.length > s2.length) return false;

//   const count1 = new Array(26).fill(0);
//   const count2 = new Array(26).fill(0);

//   for (let i = 0; i < s1.length; i++) {
//     count1[s1.charCodeAt(i) - 97]++;
//     count2[s2.charCodeAt(i) - 97]++;
//   }

//   let matches = 0;
//   for (let i = 0; i < 26; i++) {
//     if (count1[i] === count2[i]) matches++;
//   }

//   for (let i = 0; i < s2.length - s1.length; i++) {
//     if (matches === 26) return true;

//     const leftChar = s2.charCodeAt(i) - 97;
//     const rightChar = s2.charCodeAt(i + s1.length) - 97;

//     count2[rightChar]++;
//     if (count2[rightChar] === count1[rightChar]) matches++;
//     else if (count2[rightChar] === count1[rightChar] + 1) matches--;

//     count2[leftChar]--;
//     if (count2[leftChar] === count1[leftChar]) matches++;
//     else if (count2[leftChar] === count1[leftChar] - 1) matches--;
//   }

//   return matches === 26;
// // }
// // ✅ Example 4: Longest Subarray of 1’s After Flipping at Most K Zeroes
// // Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// // Output: 6 (flip 2 zeroes)

// // javascript
// // Copy
// // Edit
function longestOnes(nums, k) {
  let left = 0, maxLen = 0, zeroCount = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) zeroCount++;

    while (zeroCount > k) {
      if (nums[left] === 0) zeroCount--;
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
// }
// // ✅ Example 5: Find All Anagrams in a String
// // Input: s = "cbaebabacd", p = "abc"
// // Output: [0, 6] (start indices of anagrams)

// // javascript
// // Copy
// // Edit
// function findAnagrams(s, p) {
//   const res = [];
//   const pCount = new Array(26).fill(0);
//   const sCount = new Array(26).fill(0);

//   for (let i = 0; i < p.length; i++) {
//     pCount[p.charCodeAt(i) - 97]++;
//     sCount[s.charCodeAt(i) - 97]++;
//   }

//   for (let i = 0; i <= s.length - p.length; i++) {
//     if (i !== 0) {
//       sCount[s.charCodeAt(i - 1) - 97]--;
//       sCount[s.charCodeAt(i + p.length - 1) - 97]++;
//     }

//     if (pCount.every((val, idx) => val === sCount[idx])) {
//       res.push(i);
//     }
//   }

//   return res;
// }
// // ✅ Example 1: Pair with Target Sum in Sorted Array
// // Input: arr = [1, 2, 3, 4, 6], target = 6
// // Output: [1, 3] (because 2 + 4 = 6)

// // javascript
// // Copy
// // Edit
function pairWithTargetSum(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === target) return [left, right];
    else if (sum < target) left++;
    else right--;
  }
  return [-1, -1];
}
// // ✅ Example 2: Remove Duplicates from Sorted Array (In-Place)
// // Input: arr = [2, 3, 3, 3, 6, 9, 9]
// // Output: 5 (the first 5 elements are unique: [2, 3, 6, 9])

// // javascript
// // Copy
// // Edit
// function removeDuplicates(arr) {
//   let nextNonDuplicate = 1;

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[nextNonDuplicate - 1] !== arr[i]) {
//       arr[nextNonDuplicate] = arr[i];
//       nextNonDuplicate++;
//     }
//   }

//   return nextNonDuplicate;
// // }
// // ✅ Example 3: Squaring a Sorted Array
// // Input: arr = [-2, -1, 0, 2, 3]
// // Output: [0, 1, 4, 4, 9]

// // javascript
// // Copy
// // Edit
// function makeSquares(arr) {
//   let squares = new Array(arr.length).fill(0);
//   let left = 0, right = arr.length - 1;
//   let highestSquareIdx = arr.length - 1;

//   while (left <= right) {
//     let leftSquare = arr[left] * arr[left];
//     let rightSquare = arr[right] * arr[right];

//     if (leftSquare > rightSquare) {
//       squares[highestSquareIdx--] = leftSquare;
//       left++;
//     } else {
//       squares[highestSquareIdx--] = rightSquare;
//       right--;
//     }
//   }

//   return squares;
// // }
// // ✅ Example 4: Triplet Sum to Zero (Classic 3Sum Problem)
// // Input: arr = [-3, 0, 1, 2, -1, 1, -2]
// // Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]

// // javascript
// // Copy
// // Edit
// function searchTriplets(arr) {
//   arr.sort((a, b) => a - b);
//   const triplets = [];

//   for (let i = 0; i < arr.length - 2; i++) {
//     if (i > 0 && arr[i] === arr[i - 1]) continue;

//     let left = i + 1, right = arr.length - 1;

//     while (left < right) {
//       const sum = arr[i] + arr[left] + arr[right];

//       if (sum === 0) {
//         triplets.push([arr[i], arr[left], arr[right]]);
//         left++;
//         right--;

//         while (left < right && arr[left] === arr[left - 1]) left++;
//         while (left < right && arr[right] === arr[right + 1]) right--;
//       } else if (sum < 0) left++;
//       else right--;
//     }
//   }

//   return triplets;
// }