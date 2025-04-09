// Recursion is a programming technique where a function calls itself to solve a smaller version of the same problem.

// 🔧 Structure of a Recursive Function
// Every recursive function must have two parts:

// Base Case - The condition at which the recursion stops.

// Recursive Case - The part where the function calls itself with a modified argument, moving toward the base case.


function recurse() {
  if (baseCondition) return;
  // Recursive case
  recurse();
}
// 📦 Why Use Recursion?
// Problems that can be divided into smaller sub-problems.

// Elegant solutions for tree/graph traversals, combinations/permutations, backtracking, etc.

// // ✅ Example 1: Factorial
// Problem:
// Factorial of n = n * (n-1) * (n-2) * ... * 1


function factorial(n) {
  if (n === 0 || n === 1) return 1; // Base case
  return n * factorial(n - 1);     // Recursive call
}

console.log(factorial(5)); // Output: 120

// 🔢 Example 2: Fibonacci Numbers
// Problem:
// Fibonacci(n) = Fibonacci(n-1) + Fibonacci(n-2)


function fibonacci(n) {
  if (n === 0) return 0;           // Base case
  if (n === 1) return 1;           // Base case
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6)); // Output: 8

// ❗Note: This is not efficient. We’ll later optimize it using Memoization.

// 🔁 Example 3: Reverse a String

function reverseString(str) {
  if (str === "") return ""; // Base case
  return reverseString(str.slice(1)) + str[0]; // Recursive step
}

console.log(reverseString("hello")); // Output: "olleh"
🔁 Example 4: Sum of Array
js
Copy
Edit
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10
🧠 Example 5: Check if a Word is a Palindrome
js
Copy
Edit
function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
🌲 Example 6: Tree Traversal (Preorder)
js
Copy
Edit
const tree = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: { val: 4, left: null, right: null }
  },
  right: { val: 3, left: null, right: null }
};

function preorder(node) {
  if (!node) return;
  console.log(node.val);
  preorder(node.left);
  preorder(node.right);
}

preorder(tree);
// Output: 1 2 4 3
⚡ Bonus: Optimized Fibonacci using Memoization
js
Copy
Edit
function fibonacci(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

console.log(fibonacci(50)); // Output: 12586269025
🔍 Tips to Master Recursion:
Always define the base case first.

Make sure each recursive call reduces the problem.

Use console.log to trace the function calls.

For large problems, prefer Memoization/DP to avoid repetition.

🔁 Example 7: Power of a Number (x^n)
js
Copy
Edit
function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1);
}

console.log(power(2, 4)); // Output: 16
Covers: Recursion with arithmetic and simple base case.

🧩 Example 8: Flatten a Nested Array
js
Copy
Edit
function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item)); // Recursive call for nested array
    } else {
      result.push(item);
    }
  }

  return result;
}

console.log(flatten([1, [2, [3, 4], 5], 6])); 
// Output: [1, 2, 3, 4, 5, 6]
Covers: Handling nested structures with recursion.

🧵 Example 9: Permutations of a String
js
Copy
Edit
function permute(str, prefix = "") {
  if (str.length === 0) {
    console.log(prefix);
    return;
  }

  for (let i = 0; i < str.length; i++) {
    const rem = str.slice(0, i) + str.slice(i + 1);
    permute(rem, prefix + str[i]); // Recursive call with smaller string
  }
}

permute("abc");
Covers: Multiple recursive branches, backtracking style.

📥 Example 10: Binary Representation of a Number
js
Copy
Edit
function toBinary(n) {
  if (n === 0) return "";
  return toBinary(Math.floor(n / 2)) + (n % 2);
}

console.log(toBinary(10)); // Output: "1010"
Covers: Using recursion to simulate iterative computation.

🚦 Example 11: Checking if Array is Sorted
js
Copy
Edit
function isSorted(arr, index = 0) {
  if (index === arr.length - 1) return true;
  if (arr[index] > arr[index + 1]) return false;
  return isSorted(arr, index + 1);
}

console.log(isSorted([1, 2, 3, 4])); // true
console.log(isSorted([1, 3, 2]));   // false
Covers: Recursion with index tracking.

🪜 Example 12: Print All Subsequences of an Array
js
Copy
Edit
function subsequences(arr, i = 0, temp = []) {
  if (i === arr.length) {
    console.log(temp);
    return;
  }

  // Include the current element
  temp.push(arr[i]);
  subsequences(arr, i + 1, temp);

  // Exclude the current element
  temp.pop();
  subsequences(arr, i + 1, temp);
}

subsequences([1, 2, 3]);
Covers: Backtracking, subsets, multiple recursive paths.

🪞 Example 13: Mirror Tree (Flip Binary Tree)
js
Copy
Edit
function mirror(node) {
  if (!node) return null;

  let left = mirror(node.left);
  let right = mirror(node.right);

  node.left = right;
  node.right = left;

  return node;
}
Covers: Tree modification using post-order style recursion.

⏫ Example 14: Sum of Digits of a Number
js
Copy
Edit
function sumOfDigits(n) {
  if (n === 0) return 0;
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

console.log(sumOfDigits(1234)); // Output: 10