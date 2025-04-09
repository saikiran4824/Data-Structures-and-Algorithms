// Backtracking is a recursive algorithm used to solve problems incrementally by building candidates and removing (backtracking) when a candidate fails to satisfy the constraints.

// 🧠 Think of it as:
// Try → Explore → Backtrack → Try another path.

// 🛠 Standard Backtracking Template (DSA Format)
// js
// Copy
// Edit
function backtrack(path, choices) {
  if (base_condition_met) {
    result.push([...path]); // or return something
    return;
  }

  for (let choice of choices) {
    if (isValid(choice)) {
      path.push(choice);          // Choose
      backtrack(path, choices);   // Explore
      path.pop();                 // Un-choose (Backtrack)
    }
  }
// }
// ✅ Real Interview-Level Examples
// 1. Subsets (All possible combinations)
// 🔹 Input: [1, 2, 3]
// 🔹 Output:
// css
// Copy
// Edit
// [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]
// 📌 Code:
// js
// Copy
// Edit
function subsets(nums) {
  const result = [];

  function backtrack(start, path) {
    result.push([...path]); // Every path is a subset

    for (let i = start; i < nums.length; i++) {
      path.push(nums[i]);                // choose
      backtrack(i + 1, path);            // explore
      path.pop();                        // un-choose (backtrack)
    }
  }

  backtrack(0, []);
  return result;
}

// 2. Permutations (All possible orders)
// 🔹 Input: [1, 2, 3]
// 🔹 Output:
// css
// Copy
// Edit
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
// 📌 Code:
// js
// Copy
// Edit
function permute(nums) {
  const result = [];

  function backtrack(path, used) {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      backtrack(path, used);
      path.pop();
      used[i] = false;
    }
  }

  backtrack([], Array(nums.length).fill(false));
  return result;
// }
// 3. N-Queens Problem (Classic)
// 🔹 Input: n = 4
// 🔹 Output:
// arduino
// Copy
// Edit
// [
//  [".Q..", "...Q", "Q...", "..Q."],
//  ["..Q.", "Q...", "...Q", ".Q.."]
// ]
// 📌 Code:
// js
// Copy
// Edit
function solveNQueens(n) {
  const result = [];
  const board = Array.from({ length: n }, () => '.'.repeat(n));

  function isSafe(row, col, queens) {
    for (let r = 0; r < row; r++) {
      const c = queens[r];
      if (c === col || Math.abs(c - col) === Math.abs(r - row)) return false;
    }
    return true;
  }

  function backtrack(row, queens) {
    if (row === n) {
      const solution = queens.map(
        c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)
      );
      result.push(solution);
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col, queens)) {
        queens.push(col);
        backtrack(row + 1, queens);
        queens.pop();
      }
    }
  }

  backtrack(0, []);
  return result;
// }
// 4. Word Search (Backtracking on Grid)
// 🔹 Input:
// js
// Copy
// Edit
// board = [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
// word = "ABCCED"
// 🔹 Output: true
// 📌 Code:
// js
// Copy
// Edit
function exist(board, word) {
  const rows = board.length, cols = board[0].length;

  function dfs(r, c, i) {
    if (i === word.length) return true;
    if (r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== word[i]) return false;

    const temp = board[r][c];
    board[r][c] = '#'; // mark visited

    const found = dfs(r+1, c, i+1) || dfs(r-1, c, i+1) || dfs(r, c+1, i+1) || dfs(r, c-1, i+1);
    board[r][c] = temp; // unmark

    return found;
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (dfs(r, c, 0)) return true;
    }
  }
  return false;
// }
// 1. Combination Sum
// Problem Statement:
// Given an array of distinct integers candidates and a target integer target, return all unique combinations of candidates where the chosen numbers sum to target. The same number may be chosen from candidates an unlimited number of times.

// Approach:
// Recursive Backtracking:

// Start with an empty combination and a starting index.

// Iterate over the candidates starting from the current index.

// Include the current candidate and recursively attempt to reach the target sum.

// If the target is met, add the combination to the result; if exceeded, backtrack by removing the last added number.

// Avoid Repetition: By starting the loop from the current index, we ensure that each combination is unique and numbers can be reused.

// Code Implementation:
// javascript
// Copy
// Edit
function combinationSum(candidates, target) {
  const result = [];

  function backtrack(remaining, combination, start) {
    if (remaining === 0) {
      result.push([...combination]);
      return;
    }
    if (remaining < 0) return;

    for (let i = start; i < candidates.length; i++) {
      combination.push(candidates[i]);
      backtrack(remaining - candidates[i], combination, i);
      combination.pop();
    }
  }

  backtrack(target, [], 0);
  return result;
}

// // Example usage:
// const candidates = [2, 3, 6, 7];
// const target = 7;
// console.log(combinationSum(candidates, target));
// Sample Output:
// csharp
// Copy
// Edit
// [
//   [2, 2, 3],
//   [7]
// ]
// 2. Palindrome Partitioning
// Problem Statement:
// Given a string s, partition s such that every substring of the partition is a palindrome. Return all possible palindrome partitioning of s.

// Approach:
// Recursive Backtracking:

// Start from the beginning of the string and expand possible substrings.

// For each substring, check if it's a palindrome.

// If it is, recursively partition the remaining string.

// Collect partitions when the end of the string is reached.

// Palindrome Check: A helper function to determine if a substring is a palindrome.

// Code Implementation:
// javascript
// Copy
// Edit
function partition(s) {
  const result = [];

  function isPalindrome(sub) {
    return sub === sub.split('').reverse().join('');
  }

  function backtrack(start, path) {
    if (start === s.length) {
      result.push([...path]);
      return;
    }

    for (let end = start + 1; end <= s.length; end++) {
      const substring = s.slice(start, end);
      if (isPalindrome(substring)) {
        path.push(substring);
        backtrack(end, path);
        path.pop();
      }
    }
  }

  backtrack(0, []);
  return result;
}

// // Example usage:
// const s = "aab";
// console.log(partition(s));
// Sample Output:
// arduino
// Copy
// Edit
// [
//   ["a", "a", "b"],
//   ["aa", "b"]
// ]
// 3. Letter Combinations of a Phone Number
// Problem Statement:
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Map digits to letters as on a telephone keypad.

// Approach:
// Recursive Backtracking:

// Map each digit to its corresponding letters.

// Build combinations by appending letters corresponding to each digit.

// Continue until the combination length matches the input digits length.

// Base Case: If the input is empty, return an empty array.

// Code Implementation:
// javascript
// Copy
// Edit
function letterCombinations(digits) {
  if (!digits.length) return [];

  const phoneMap = {
    '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
    '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
  };

  const result = [];

  function backtrack(index, path) {
    if (path.length === digits.length) {
      result.push(path.join(''));
      return;
    }

    const letters = phoneMap[digits[index]];
    for (const letter of letters) {
      path.push(letter);
      backtrack(index + 1, path);
      path.pop();
    }
  }

  backtrack(0, []);
  return result;
}

// // Example usage:
// const digits = "23";
// console.log(letterCombinations(digits));
// Sample Output:
// css
// Copy
// Edit
// ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
// 4. Generate Parentheses
// Problem Statement:
// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Approach:
// Recursive Backtracking:

// Keep track of the number of open and close parentheses used.

// Add an open parenthesis if it doesn't exceed n.

// Add a close parenthesis if it doesn't exceed the number of open parentheses.

// Valid combinations are collected when both open and close counts reach n.

// Code Implementation:
// javascript
// Copy
// Edit
function generateParenthesis(n) {
  const result = [];

  function backtrack(open, close, path) {
    if (path.length === 2 * n) {
      result.push(path.join(''));
      return;
    }

    if (open < n) {
      path.push('(');
      backtrack(open + 1, close, path);
      path.pop();
    }
    if (close < open) {
      path.push(')');
      backtrack(open, close + 1, path);
      path.pop();
    }
  }

  backtrack(0, 0, []);
  return result;
}

// // Example usage:
// const n = 3;
// console.log(generateParenthesis(n));
// Sample Output:
// arduino
// Copy
// Edit
[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
// 1. N-Queens Problem
// Problem Statement:
// Place N queens on an N×N chessboard such that no two queens threaten each other. This means that no two queens can be in the same row, column, or diagonal.

// Step-by-Step Approach:
// Understanding the Constraints:

// Each queen must be placed in a unique row and column.

// No two queens should share the same diagonal.

// Backtracking Strategy:

// Place queens row by row, ensuring that each placement doesn't violate the constraints.

// If a valid position is found for a queen in the current row, move to the next row.

// If no valid position is found in the current row, backtrack to the previous row and adjust the queen's position.

// Implementation Details:

// Use arrays to track columns and diagonals that are under attack:

// cols: Tracks which columns are occupied.

// diag1: Tracks the major diagonals (row - col).

// diag2: Tracks the minor diagonals (row + col).

// JavaScript Implementation:
// javascript
// Copy
// Edit
function solveNQueens(n) {
  const results = [];
  const cols = new Set();
  const diag1 = new Set();
  const diag2 = new Set();
  const board = Array.from({ length: n }, () => Array(n).fill('.'));

  function backtrack(row = 0) {
    if (row === n) {
      results.push(board.map(r => r.join('')));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) {
        continue;
      }
      board[row][col] = 'Q';
      cols.add(col);
      diag1.add(row - col);
      diag2.add(row + col);
      backtrack(row + 1);
      board[row][col] = '.';
      cols.delete(col);
      diag1.delete(row - col);
      diag2.delete(row + col);
    }
  }

  backtrack();
  return results;
}

// // Example usage:
// const n = 4;
// console.log(solveNQueens(n));
// Sample Output:
// arduino
// Copy
// Edit
[
  [
    ".Q..",
    "...Q",
    "Q...",
    "..Q."
  ],
  [
    "..Q.",
    "Q...",
    "...Q",
    ".Q.."
  ]
 ]
// 2. Sudoku Solver
// Problem Statement:
// Given a partially filled 9×9 Sudoku board, fill the empty cells such that each row, column, and 3×3 subgrid contains all digits from 1 to 9 without repetition.

// Step-by-Step Approach:
// Identify Empty Cells:

// Traverse the board to locate cells that are unassigned (typically represented by '.').

// Recursive Backtracking:

// For each empty cell, attempt to place digits from '1' to '9'.

// After placing a digit, recursively attempt to solve the rest of the board.

// If placing a digit leads to a solution, retain it; otherwise, backtrack by removing the digit and trying the next possibility.

// Validation:

// Before placing a digit, ensure it doesn't violate Sudoku rules in the current row, column, or 3×3 subgrid.

// JavaScript Implementation:
// javascript
// Copy
// Edit
function solveSudoku(board) {
  function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num || board[i][col] === num) {
        return false;
      }
      const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const boxCol = 3 * Math.floor(col / 3) + (i % 3);
      if (board[boxRow][boxCol] === num) {
        return false;
      }
    }
    return true;
  }

  function backtrack() {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === '.') {
          for (let num = '1'; num <= '9'; num++) {
            if (isValid(board, row, col, num)) {
              board[row][col] = num;
              if (backtrack()) {
                return true;
              }
              board[row][col] = '.';
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  backtrack();
}

// Example usage:
const board = [
  ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

// solveSudoku(board);
// console.log(board);
// Sample Output:
// arduino
// Copy
// Edit
[
  ['5', '3', '4', '6', '7', '8', '9', '1', '2'],
  ['6', '7', '2', '1', '9', '5', '3', '4', '8'],
  ['1', '9', '8', '3', '4', '2', '5', '6', '7'],
  ['8', '5', '9', '7', '6', '1', '4', '2', '3'],
  ['4', '2', '6', '8', '5', '3', '7', '9', '1'],
  ['7', '1', '3', '9', '2', '4', '8', '5', '6'],
  ['9', '6', '1', '5', '3', '7', '2', '8', '4'],
  ['2', '8', '7', '4', '1', '9', '6', '3', '5'],
  ['3', '4', '5', '2', '8', '6', '1', '7', '9']
];
}