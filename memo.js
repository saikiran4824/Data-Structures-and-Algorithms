Example 1: Fibonacci Sequence in JavaScript
Problem:
Calculate the n-th Fibonacci number.

Naive Recursive Solution (Without Memoization):
javascript
Copy
function fib(n) {
    if (n <= 1) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}
Explanation:

The recursive solution calculates the Fibonacci number by calling fib(n-1) and fib(n-2). However, this results in recalculating the same values many times, leading to exponential time complexity.

Optimized Solution with Memoization:
javascript
Copy
function fibMemo(n, memo = {}) {
    if (n in memo) {
        return memo[n];
    }
    if (n <= 1) {
        return n;
    }
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}
Explanation:

Here, we use an object memo to store the results of already computed Fibonacci values.

Before calculating fib(n), we check if it's already in memo. If it is, we return the cached value; otherwise, we compute it and store it in memo.

Example 2: Longest Common Subsequence (LCS) in JavaScript
Problem:
Find the length of the longest common subsequence between two strings.

Naive Recursive Solution (Without Memoization):
javascript
Copy
function lcs(X, Y, m, n) {
    if (m === 0 || n === 0) {
        return 0;
    }
    if (X[m - 1] === Y[n - 1]) {
        return 1 + lcs(X, Y, m - 1, n - 1);
    } else {
        return Math.max(lcs(X, Y, m - 1, n), lcs(X, Y, m, n - 1));
    }
}
Explanation:

This recursive approach explores all possible subsequences, resulting in exponential time complexity.

Optimized Solution with Memoization:
javascript
Copy
function lcsMemo(X, Y, m, n, memo = {}) {
    if (m === 0 || n === 0) {
        return 0;
    }
    if (memo[`${m},${n}`] !== undefined) {
        return memo[`${m},${n}`];
    }
    if (X[m - 1] === Y[n - 1]) {
        memo[`${m},${n}`] = 1 + lcsMemo(X, Y, m - 1, n - 1, memo);
    } else {
        memo[`${m},${n}`] = Math.max(
            lcsMemo(X, Y, m - 1, n, memo),
            lcsMemo(X, Y, m, n - 1, memo)
        );
    }
    return memo[`${m},${n}`];
}
Explanation:

In this optimized solution, we store the results of subproblems in the memo object, with keys in the form of ${m},${n} to represent the subproblem (m, n).

This avoids redundant recalculations and reduces time complexity from O(2^n) to O(m * n).

Example 3: Coin Change Problem in JavaScript
Problem:
Given coin denominations and an amount, find the minimum number of coins required to make that amount.

Naive Recursive Solution (Without Memoization):
javascript
Copy
function coinChange(coins, amount) {
    if (amount === 0) {
        return 0;
    }
    if (amount < 0) {
        return -1;
    }
    
    let minCoins = Infinity;
    for (let coin of coins) {
        let res = coinChange(coins, amount - coin);
        if (res >= 0) {
            minCoins = Math.min(minCoins, res + 1);
        }
    }
    return minCoins === Infinity ? -1 : minCoins;
}
Explanation:

The function recursively tries each coin denomination and computes the minimum number of coins needed for the given amount.

It has an exponential time complexity (O(2^n)) due to recomputing results for the same amount multiple times.

Optimized Solution with Memoization:
javascript
Copy
function coinChangeMemo(coins, amount, memo = {}) {
    if (amount === 0) {
        return 0;
    }
    if (amount < 0) {
        return -1;
    }
    if (memo[amount] !== undefined) {
        return memo[amount];
    }

    let minCoins = Infinity;
    for (let coin of coins) {
        let res = coinChangeMemo(coins, amount - coin, memo);
        if (res >= 0) {
            minCoins = Math.min(minCoins, res + 1);
        }
    }

    memo[amount] = minCoins === Infinity ? -1 : minCoins;
    return memo[amount];
}
Explanation:

Here, the memo object stores the result for each amount.

Before recomputing the result for a given amount, we check if it's already in memo. If it is, we return the stored value, reducing redundant calculations.

Additional Coding Problems with Memoization in JavaScript
Problem 1: Climbing Stairs
You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you reach the top?

javascript
Copy
function climbStairs(n, memo = {}) {
    if (n <= 2) return n;
    if (memo[n]) return memo[n];
    
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
    return memo[n];
}
Explanation:

This problem is similar to the Fibonacci sequence but with steps of 1 or 2.

Memoization is used to store results for each n, reducing recalculation.

Problem 2: Unique Paths in a Grid
A robot is located at the top-left corner of a m x n grid. The robot can only move either down or right at any point in time. How many different paths can the robot take to reach the bottom-right corner?

javascript
Copy
function uniquePaths(m, n, memo = {}) {
    if (m === 1 || n === 1) return 1;
    if (memo[`${m},${n}`]) return memo[`${m},${n}`];
    
    memo[`${m},${n}`] = uniquePaths(m - 1, n, memo) + uniquePaths(m, n - 1, memo);
    return memo[`${m},${n}`];
}
Explanation:

The recursive formula is based on the fact that the robot can either come from the top or from the left, so the number of paths to reach a cell (m, n) is the sum of the paths to (m-1, n) and (m, n-1).

Memoization reduces the repeated calculations of paths for the same grid positions.

Problem 3: Palindrome Partitioning
Given a string, partition it such that every substring is a palindrome. Return the minimum number of cuts required.

javascript
Copy
function minCutPalindromePartition(s, memo = {}) {
    if (s in memo) return memo[s];
    
    if (isPalindrome(s)) return 0;

    let minCuts = s.length - 1;
    for (let i = 1; i < s.length; i++) {
        let left = s.slice(0, i);
        let right = s.slice(i);
        if (isPalindrome(left)) {
            minCuts = Math.min(minCuts, 1 + minCutPalindromePartition(right, memo));
        }
    }

    memo[s] = minCuts;
    return minCuts;
}

function isPalindrome(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}
Explanation:

The problem involves finding the minimum number of cuts required to split a string into palindromic substrings.

For each possible partition, we check if the left part is a palindrome and recursively calculate the minimum cuts for the right part.

Conclusion:
Memoization is a powerful technique for optimizing recursive algorithms, especially when there are overlapping subproblems. By caching results, we avoid recomputing the same subproblems multiple times, reducing time complexity significantly.

The problems above illustrate how memoization can be applied in a variety of scenarios, from classic problems like Fibonacci and LCS to more complex problems like coin change, climbing stairs, and palindrome partitioning. Using memoization, we can transform inefficient recursive solutions into efficient ones.