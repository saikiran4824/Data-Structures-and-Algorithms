// 1. Basic String Operations
// These are basic string manipulation problems where you need to perform basic operations like reversing, concatenating, or checking string properties.

// Problem 1: Reverse a String
// Reverse a given string.

// Solution:

// javascript
// Copy
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("hello")); // "olleh"
// Explanation:

// Convert the string to an array using split('').

// Reverse the array with reverse().

// Join the array back into a string with join('').

// Problem 2: Check if a String is a Palindrome
// A palindrome is a string that reads the same forward and backward (e.g., "madam").

// Solution:

// javascript
// Copy
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
// Explanation:

// Reverse the string and compare it to the original string. If they are equal, the string is a palindrome.

// Problem 3: Count the Number of Vowels in a String
// Count how many vowels (a, e, i, o, u) are in the given string.

// Solution:

// javascript
// Copy
function countVowels(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("hello")); // 2
// Explanation:

// Iterate through each character of the string and check if it's a vowel using the includes method. Increment the count if it's a vowel.

// 2. Pattern Matching
// Pattern matching involves searching for occurrences of substrings or patterns within a string.

// Problem 1: Find All Occurrences of a Substring
// Find all the starting indices of the occurrences of a substring within a given string.

// Solution:

// javascript
// Copy
function findAllOccurrences(str, substring) {
    let indices = [];
    let index = str.indexOf(substring);

    while (index !== -1) {
        indices.push(index);
        index = str.indexOf(substring, index + 1);
    }
    return indices;
}

console.log(findAllOccurrences("ababa", "ab")); // [0, 2]
// Explanation:

// Use indexOf to find the first occurrence of the substring.

// Continue searching for the next occurrence by adjusting the starting position (index + 1).

// Problem 2: KMP Pattern Matching Algorithm
// The Knuth-Morris-Pratt (KMP) algorithm is an efficient string matching algorithm.

// Solution:

// javascript
// Copy
function KMPSearch(text, pattern) {
    const lps = computeLPSArray(pattern);
    let i = 0; // index for text
    let j = 0; // index for pattern
    const results = [];

    while (i < text.length) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }
        if (j === pattern.length) {
            results.push(i - j);
            j = lps[j - 1];
        } else if (i < text.length && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    return results;
}

function computeLPSArray(pattern) {
    const lps = Array(pattern.length).fill(0);
    let length = 0;
    let i = 1;

    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            if (length !== 0) {
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

console.log(KMPSearch("ababcababcabc", "abc")); // [2, 7, 10]
// Explanation:

// The KMP algorithm preprocesses the pattern to compute the Longest Prefix Suffix (LPS) array, which is then used to skip unnecessary checks when a mismatch occurs.

// The main loop iterates over the text and pattern, using the LPS array to avoid redundant comparisons.

// 3. Substring and Anagram Problems
// These problems involve finding substrings, checking if a substring is an anagram, or finding the smallest or largest substring that satisfies some condition.

// Problem 1: Check if Two Strings are Anagrams
// Check if two strings are anagrams (i.e., if they contain the same characters in the same frequency).

// Solution:

// javascript
// Copy
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
// Explanation:

// First, check if the lengths of both strings are the same. If not, return false.

// Sort both strings and compare them. If they are identical after sorting, they are anagrams.

// Problem 2: Find the Length of the Longest Substring Without Repeating Characters
// Find the length of the longest substring that does not contain repeating characters.

// Solution:

// javascript
// Copy
function lengthOfLongestSubstring(str) {
    let set = new Set();
    let left = 0, right = 0, maxLength = 0;

    while (right < str.length) {
        if (!set.has(str[right])) {
            set.add(str[right]);
            right++;
            maxLength = Math.max(maxLength, right - left);
        } else {
            set.delete(str[left]);
            left++;
        }
    }
    return maxLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3 ("abc")
// Explanation:

// Use the sliding window technique with two pointers (left and right).

// Use a set to store characters within the window. If a character is already in the set, move the left pointer to shrink the window and remove characters from the set until the character at right can be added.

// 4. String Search Algorithms
// These problems deal with searching for specific patterns or substrings using more advanced algorithms.

// Problem 1: Rabin-Karp Algorithm for String Matching
// The Rabin-Karp algorithm is a hashing-based approach for searching a pattern in a text.

// Solution:

// javascript
// Copy
function rabinKarp(text, pattern) {
    const prime = 101;
    const m = pattern.length;
    const n = text.length;
    const patternHash = hash(pattern, m);
    let currentHash = hash(text, m);

    const result = [];

    for (let i = 0; i <= n - m; i++) {
        if (currentHash === patternHash && text.slice(i, i + m) === pattern) {
            result.push(i);
        }

        if (i < n - m) {
            currentHash = rehash(text, i, i + m, currentHash, prime);
        }
    }
    return result;
}

function hash(str, len) {
    let h = 0;
    for (let i = 0; i < len; i++) {
        h = (h * 256 + str.charCodeAt(i)) % 101;
    }
    return h;
}

function rehash(text, oldIndex, newIndex, oldHash, prime) {
    oldHash = (oldHash - text.charCodeAt(oldIndex) * Math.pow(256, newIndex - oldIndex)) % prime;
    oldHash = (oldHash * 256 + text.charCodeAt(newIndex)) % prime;
    return oldHash;
}

console.log(rabinKarp("ababcababcabc", "abc")); // [2, 7, 10]
// Explanation:

// The Rabin-Karp algorithm computes a hash for the pattern and each substring of the text of the same length.

// If the hashes match, it checks for a direct match between the pattern and substring to avoid false positives due to hash collisions.

// 5. String Compression and Decompression
// These problems involve compressing a string, such as representing repeating characters with counts.

// Problem 1: String Compression
// Compress a string such that consecutive identical characters are replaced by the character followed by the count.

// Solution:

// javascript

function compressString(str) {
    let result = '';
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            result += str[i - 1] + count;
            count = 1;
        }
    }

    return result.length < str.length ? result : str;
}

console.log(compressString("aabcccccaaa")); // "a2b1c5a3"
console.log(compressString("abcd")); // "abcd"
// Explanation:

// Iterate through the string and count consecutive characters.

// If the length of the compressed string is less than the original string, return the compressed string; otherwise, return the original string.

// Conclusion:
// String-related problems in DSA cover a wide range of topics, including basic string manipulation, pattern matching, searching algorithms, and compression techniques. The problems discussed above are just a few examples of how strings can be handled in various scenarios. Solving these problems often involves:

// Understanding string properties and operations.

// Using efficient algorithms like KMP, Rabin-Karp, and sliding window for pattern matching and substring problems.

// Applying hashing and dynamic programming for advanced string problems.