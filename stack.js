// A stack is a linear data structure that follows the Last In First Out (LIFO) principle. This means that the last element added to the stack will be the first one to be removed. You can think of a stack as a stack of plates: the last plate you add is the first one you remove.

// Basic Operations on Stacks:
// push(item): Adds an item to the top of the stack.

// pop(): Removes and returns the item from the top of the stack.

// peek(): Returns the item at the top of the stack without removing it.

// isEmpty(): Returns true if the stack is empty, otherwise false.

// size(): Returns the number of items in the stack.

// How Stack Works?
// Stacks are commonly implemented using an array or linked list. In most programming languages, arrays or lists provide methods for manipulating elements at the end, which naturally allows for stack-like operations.

// Here is how we can implement a stack in JavaScript:

// javascript
// Copy
// class Stack {
//     constructor() {
//         this.items = [];
//     }

//     push(item) {
//         this.items.push(item);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         return this.items.pop();
//     }

//     peek() {
//         if (this.isEmpty()) {
//             return "Stack is empty";
//         }
//         return this.items[this.items.length - 1];
//     }

//     isEmpty() {
//         return this.items.length === 0;
//     }

//     size() {
//         return this.items.length;
//     }

//     print() {
//         console.log(this.items.toString());
//     }
// }

// const stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.print(); // "10,20,30"
// console.log(stack.pop()); // 30
// stack.print(); // "10,20"
// console.log(stack.peek()); // 20
// Applications of Stacks
// Expression Evaluation:

// Stacks are commonly used to evaluate mathematical expressions (e.g., infix to postfix conversion and evaluating postfix expressions).

// Function Call Stack:

// The system uses a stack to manage function calls, where the return address and local variables of a function are pushed onto the stack.

// Undo Functionality in Applications:

// Many applications like text editors use stacks to implement undo operations. Each action is pushed onto a stack, and when the user presses "undo," the most recent action is popped off the stack.

// Backtracking Algorithms:

// Stacks are used in problems like finding paths in mazes, navigating a graph, or generating permutations.

// Good Stack-related DSA Problems
// 1. Valid Parentheses
// Problem: Given a string containing just the characters '(', ')', '{', '}', '[', ']', determine if the input string is valid. An input string is valid if:

// The brackets must close in the correct order.

// Each opening bracket has a corresponding closing bracket.

// Solution:

// javascript
// Copy
// function isValid(s) {
//     let stack = [];
//     let map = {
//         '(': ')',
//         '{': '}',
//         '[': ']'
//     };
    
//     for (let char of s) {
//         if (char in map) {
//             stack.push(char);
//         } else {
//             if (stack.length === 0 || map[stack.pop()] !== char) {
//                 return false;
//             }
//         }
//     }
    
//     return stack.length === 0;
// }

// console.log(isValid("()[]{}")); // true
// console.log(isValid("([)]")); // false
// console.log(isValid("{[]}")); // true
// Explanation:

// Stack Usage: The opening brackets are pushed onto the stack. For each closing bracket, we check if it matches the last opened bracket (the top of the stack).

// Time Complexity: O(n), where n is the length of the string.

// Space Complexity: O(n) due to the stack.

// 2. Daily Temperature
// Problem: Given an array of temperatures, where each element represents the temperature on a given day, return an array of the same length where each element represents the number of days you have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// Solution:

// javascript
// Copy
function dailyTemperatures(temperatures) {
    let result = new Array(temperatures.length).fill(0);
    console.log(result);
    
    let stack = [];

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let idx = stack.pop();
            result[idx] = i - idx;
        }
        stack.push(i);
    }

    return result;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
// Explanation:

// Stack Usage: We maintain a stack of indices. When we encounter a temperature greater than the temperature at the top of the stack, it means we have found a warmer temperature for the day at that index. We pop the stack and calculate the difference in days.

// Time Complexity: O(n), where n is the number of days.

// Space Complexity: O(n) for the stack and the result array.

// 3. Next Greater Element
// Problem: Given an array of integers, find the next greater element for each element. The next greater element for an element x is the first greater element that appears to the right of x in the array.

// Solution:

// javascript
// // Copy
// function nextGreaterElements(nums) {
//     let result = new Array(nums.length).fill(-1);
//     let stack = [];

//     for (let i = 0; i < 2 * nums.length; i++) {
//         while (stack.length && nums[stack[stack.length - 1]] < nums[i % nums.length]) {
//             let index = stack.pop();
//             result[index] = nums[i % nums.length];
//         }
//         stack.push(i % nums.length);
//     }

//     return result;
// }

// console.log(nextGreaterElements([1, 2, 1])); // [2, -1, 2]
// // Explanation:

// Stack Usage: We loop twice over the array (circularly) and use the stack to store indices of the elements. We check if the current element is greater than the element at the index stored at the top of the stack.

// Time Complexity: O(n), where n is the number of elements in the array.

// Space Complexity: O(n) due to the stack and the result array.

// 4. Evaluate Reverse Polish Notation
// Problem: Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

// Solution:

// javascript
// Copy
function evalRPN(tokens) {
    let stack = [];

    for (let token of tokens) {
        if (['+', '-', '*', '/'].includes(token)) {
            let b = stack.pop();
            let a = stack.pop();
            if (token === '+') stack.push(a + b);
            else if (token === '-') stack.push(a - b);
            else if (token === '*') stack.push(a * b);
            else stack.push(Math.trunc(a / b)); // Truncate towards zero
        } else {
            stack.push(Number(token));
        }
    }

    return stack[0];
}

console.log(evalRPN(["2", "1", "+", "3", "*"])); // 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // 6
// Explanation:

// Stack Usage: We push operands (numbers) onto the stack. When we encounter an operator, we pop the required operands off the stack, perform the operation, and push the result back onto the stack.

// Time Complexity: O(n), where n is the number of tokens.

// Space Complexity: O(n) for the stack.

// 5. Largest Rectangle in Histogram
// Problem: Given an array representing the histogram heights, find the area of the largest rectangle that can be formed within the histogram.

// Solution:

// javascript
// Copy
function largestRectangleArea(heights) {
    let stack = [-1]; // Initialize stack with -1 to handle edge cases
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 1 && heights[stack[stack.length - 1]] >= heights[i]) {
            let height = heights[stack.pop()];
            let width = i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    while (stack.length > 1) {
        let height = heights[stack.pop()];
        let width = heights.length - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
    }

    return maxArea;
}

console.log(largestRectangleArea([2, 1, 5, 6, 2, 3])); // 10
// Explanation:

// Stack Usage: The stack is used to keep track of the indices of the histogram bars. We calculate the area whenever we encounter a shorter bar than the one at the top of the stack.

// Time Complexity: O(n), where n is the number of bars in the histogram.

// Space Complexity: O(n) for the stack.

// Conclusion
// Stacks are fundamental data structures with a wide range of applications, including expression evaluation, backtracking, and undo operations. The problems above demonstrate how stacks can be leveraged to solve common algorithmic challenges in an efficient manner.

// By practicing these problems, you will deepen your understanding of stacks and be better prepared for coding interviews and competitive programming contests.