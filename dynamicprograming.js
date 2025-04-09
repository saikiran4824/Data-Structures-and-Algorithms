// Dynamic Programming (DP)
// Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler subproblems and storing the results of these subproblems to avoid redundant calculations. The key idea behind DP is to solve each subproblem only once and store its result (usually in an array or a table) for future use.

// When to use Dynamic Programming:
// DP is used when the problem can be divided into overlapping subproblems and optimal substructure. This means:

// Overlapping Subproblems: The problem can be broken down into smaller subproblems, and these subproblems are solved multiple times during the computation.

// Optimal Substructure: The solution to the overall problem can be constructed efficiently from solutions to its subproblems.

// Steps to solve a DP problem:
// Identify subproblems: Break down the problem into smaller subproblems.

// Recurrence Relation: Develop a recursive formula that relates the solution of the problem to the solutions of its subproblems.

// Base Case: Identify the simplest possible cases that can be directly solved.

// Memoization or Tabulation: Choose whether to use Memoization (top-down) or Tabulation (bottom-up) to store solutions to subproblems.

// Popular Dynamic Programming Problems
// 1. Fibonacci Sequence
// One of the simplest examples of dynamic programming is the Fibonacci sequence, where each number is the sum of the two preceding ones.

// Naive Recursion (Exponential time complexity):

// javascript
// Copy


function fib(n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
 }


// Optimized DP Approach:
// javascript
// Copy
// Using Memoization (Top-down approach)


function fibMemo(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 1) return n;
    
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

console.log(fibMemo(10)); // 55


// Explanation:
// Memoization stores already computed Fibonacci numbers in the memo object to avoid recomputation.
// Time Complexity: O(n) (linear), as each subproblem is solved only once.
// 2. 0/1 Knapsack Problem
// Given a set of items, each with a weight and a value, determine the maximum value that can be obtained by selecting a subset of items such that the total weight does not exceed a given limit.
// Problem:
// You have n items, each with a weight w[i] and a value v[i].
// You are given a knapsack capacity W, and you need to find the maximum total value that can be obtained without exceeding the weight limit.
// Solution:
// javascript
// Copy


function knapsack(weights, values, W, n) {
    let dp = Array(n + 1).fill().map(() => Array(W + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let w = 0; w <= W; w++) {
            if (weights[i - 1] <= w) {
                dp[i][w] = Math.max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w]);
            } else {
                dp[i][w] = dp[i - 1][w];
            }
        }
    }
    return dp[n][W];
}

const weights = [1, 2, 3];
const values = [10, 20, 30];
const W = 4;

console.log(knapsack(weights, values, W, weights.length)); // 50


// Explanation:
// DP Table (dp[i][w]): This table stores the maximum value obtainable using the first i items with a knapsack capacity w.
// State Transition: If the current item is not included, the value remains the same as dp[i-1][w]. If it is included, the value is values[i-1] + dp[i-1][w-weights[i-1]].
// Time Complexity: O(n * W), where n is the number of items and W is the knapsack capacity.
// 3. Longest Common Subsequence (LCS)
// Given two strings s1 and s2, find the length of the longest subsequence present in both strings.
// Problem:
// A subsequence is a sequence derived from another sequence by deleting some or no elements without changing the order of the remaining elements.
// Find the length of the longest subsequence common to both strings.
// Solution:
// javascript
// Copy

function longestCommonSubsequence(s1, s2) {
    const m = s1.length;
    const n = s2.length;
    let dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}

console.log(longestCommonSubsequence("abcde", "ace")); // 3 ("ace")
// Explanation:

// DP Table (dp[i][j]): dp[i][j] stores the length of the longest common subsequence of the first i characters of s1 and the first j characters of s2.

// State Transition: If characters match (s1[i-1] === s2[j-1]), the value is dp[i-1][j-1] + 1. Otherwise, it's the maximum of dp[i-1][j] and dp[i][j-1].

// Time Complexity: O(m * n), where m and n are the lengths of the two strings.

// 4. Coin Change Problem
// Given a set of coins of different denominations, determine the minimum number of coins needed to make a certain amount.

// Problem:

// You are given an array of coins of different denominations, and a target amount. Find the minimum number of coins required to make the amount.

// You can use each coin as many times as needed.

// Solution:

// javascript
// Copy
function coinChange(coins, amount) {
    let dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log(coinChange([1, 2, 5], 11)); // 3 (5 + 5 + 1)
// Explanation:

// DP Array (dp[i]): dp[i] stores the minimum number of coins required to make amount i.

// State Transition: For each coin, update dp[i] as the minimum of its current value and dp[i - coin] + 1 (i.e., using the coin).

// Time Complexity: O(n * amount), where n is the number of coins and amount is the target value.

// 5. Matrix Chain Multiplication
// Given a sequence of matrices, find the most efficient way to multiply them together.

// Problem:

// You are given a sequence of matrices, and you need to find the minimum number of scalar multiplications needed to multiply the matrices together.

// Solution:

// javascript
// Copy
function matrixChainOrder(dimensions) {
    const n = dimensions.length;
    let dp = Array(n).fill().map(() => Array(n).fill(0));

    for (let len = 2; len < n; len++) {
        for (let i = 1; i < n - len + 1; i++) {
            let j = i + len - 1;
            dp[i][j] = Infinity;
            for (let k = i; k < j; k++) {
                let q = dp[i][k] + dp[k + 1][j] + dimensions[i - 1] * dimensions[k] * dimensions[j];
                dp[i][j] = Math.min(dp[i][j], q);
            }
        }
    }
    return dp[1][n - 1];
}

console.log(matrixChainOrder([1, 2, 3, 4])); // 18
// Explanation:

// DP Table (dp[i][j]): dp[i][j] stores the minimum number of scalar multiplications required to multiply matrices from index i to j.

// State Transition: Try all possible positions k to split the product into two parts: i to k and k+1 to j, and choose the one with the least cost.

// Time Complexity: O(n^3), where n is the number of matrices.

// Conclusion
// Dynamic Programming is a powerful technique used for solving optimization problems by breaking down problems into overlapping subproblems and solving them optimally. The most common DP problems involve:

// Optimization: Finding the optimal solution (e.g., maximum value, minimum number of coins, etc.).

// Counting: Counting the number of ways to do something (e.g., distinct paths, subsequences, etc.).

// Subsequences and Subarrays: Problems like Longest Common Subsequence, Subset Sum, etc.

// Multi-stage Decision Problems: Problems like Matrix Chain Multiplication, where decisions need to be made at each stage to minimize/maximize the cost.

// give some more good examples pls

// ChatGPT said:
// Certainly! Here are some more classic Dynamic Programming (DP) problems along with their explanations and solutions in JavaScript. These examples cover a variety of use cases and help deepen understanding of DP concepts.

// 1. Longest Increasing Subsequence (LIS)
// Problem: Given an array of integers, find the length of the longest strictly increasing subsequence.

// Solution:

// javascript
// Copy
function lengthOfLIS(nums) {
    if (nums.length === 0) return 0;
    
    let dp = Array(nums.length).fill(1); // Initialize dp array with 1 (every element is an LIS of length 1 by itself)

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
}

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // 4 (The LIS is [2, 3, 7, 101])
// Explanation:

// We create a dp array where dp[i] stores the length of the longest increasing subsequence ending at index i.

// For each element, check all previous elements. If the current element is greater than a previous element, update dp[i] accordingly.

// Time Complexity: O(n^2), where n is the length of the input array.

// 2. Edit Distance (Levenshtein Distance)
// Problem: Given two strings word1 and word2, find the minimum number of operations required to convert word1 to word2. The allowed operations are insert, delete, or replace a character.

// Solution:

// javascript
// Copy
function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;
    
    let dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));
    
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0) dp[i][j] = j; // If word1 is empty, insert all characters of word2
            else if (j === 0) dp[i][j] = i; // If word2 is empty, delete all characters of word1
            else if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1]; // No operation needed
            else {
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
            }
        }
    }

    return dp[m][n];
}

console.log(minDistance("kitten", "sitting")); // 3 (kitten -> sitten -> sittin -> sitting)

// Explanation:
// dp[i][j] represents the minimum number of operations required to convert the first i characters of word1 to the first j characters of word2.
// We check if characters at position i and j match. If they do, no operation is needed. Otherwise, calculate the cost of insert, delete, or replace operations.
// Time Complexity: O(m * n), where m and n are the lengths of the two strings.
// 3. Partition Equal Subset Sum
// Problem: Given a set of positive numbers, can you partition it into two subsets such that the sum of the elements in both subsets is equal
// Solution:
// javascript
// Copy


function canPartition(nums) {
    const sum = nums.reduce((a, b) => a + b, 0);
    if (sum % 2 !== 0) return false; // If the total sum is odd, it's not possible to partition

    const target = sum / 2;
    let dp = Array(target + 1).fill(false);
    dp[0] = true;

    for (let num of nums) {
        for (let j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num];
        }
    }

    return dp[target];
}

console.log(canPartition([1, 5, 11, 5])); // true (The array can be partitioned into [1, 5, 5] and [11])
console.log(canPartition([1, 2, 3, 5])); // false

// Explanation:

// The idea is to find if there is a subset that sums to half of the total sum (target).

// We use a dynamic programming array dp where dp[j] is true if a subset sum of j is achievable.

// Time Complexity: O(n * target), where n is the number of elements in the array, and target is half of the sum of the array.

// 4. Maximum Subarray Sum (Kadane’s Algorithm)
// Problem: Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum.

// Solution:

// javascript
// Copy


function maxSubArray(nums) {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 

// 6 (The subarray [4, -1, 2, 1] has the largest sum)
// Explanation:

// Kadane’s Algorithm: We iterate through the array, maintaining the maximum sum ending at the current position (maxEndingHere). We update the global maximum (maxSoFar) as we go.

// Time Complexity: O(n), where n is the number of elements in the array.

// 5. Rod Cutting Problem
// Problem: You are given a rod of length n and an array of prices that represent the price of rods of length i for i = 1, 2, ..., n. Find the maximum revenue that can be obtained by cutting the rod into smaller lengths.

// Solution:

// javascript

// Copy




function rodCutting(prices, n) {
    let dp = Array(n + 1).fill(0); // Initialize dp array
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] = Math.max(dp[i], prices[j - 1] + dp[i - j]);
        }
    }

    return dp[n];
}

const prices = [2, 5, 7, 8, 10, 17, 17, 20];
console.log(rodCutting(prices, 8)); // 22 (Cut into two pieces of length 6 and 2, prices are 17 + 5)


// Explanation:
// dp[i] represents the maximum revenue we can achieve by cutting a rod of length i.
// We iteratively compute the maximum revenue for each rod length, considering all possible ways to cut the rod.
// Time Complexity: O(n^2), where n is the length of the rod.
// 6. Longest Palindromic Substring
// Problem: Given a string s, find the longest substring which is a palindrome.
// Solution:
// javascript
// Copy


function longestPalindrome(s) {
    if (s.length <= 1) return s;
    
    let start = 0, maxLength = 1;
    
    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    };
    
    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i); // Odd length palindrome
        const len2 = expandAroundCenter(i, i + 1); // Even length palindrome
        const len = Math.max(len1, len2);
        
        if (len > maxLength) {
            maxLength = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }

    return s.slice(start, start + maxLength);
}

console.log(longestPalindrome("babad")); // "bab" or "aba"


// Explanation:
// We use a center-expansion technique to find palindromes around each center in the string.
// For each character in the string, we try to expand both to the left and right and check for palindromes.
// Time Complexity: O(n^2), where n is the length of the string.
// 7. Word Break Problem
// Problem: Given a string s and a dictionary of words, determine if s can be segmented into a space-separated sequence of dictionary words.
// Solution:
// javascript
// Copy


function wordBreak(s, wordDict) {
    let dp = Array(s.length + 1).fill(false);
    dp[0] = true; // An empty string can be segmented

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.slice(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[s.length];
}

console.log(wordBreak("leetcode", ["leet", "code"])); // true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // true


// Explanation:

// We use a dp array where dp[i] is true if the substring s[0...i-1] can be segmented into dictionary words.

// We check each possible prefix and update the dp array accordingly.

// Time Complexity: O(n^2 * m), where n is the length of the string and m is the average length of words in the dictionary.

