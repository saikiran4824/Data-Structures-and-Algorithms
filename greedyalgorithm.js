A greedy algorithm builds up a solution piece by piece, always choosing the next piece that offers the most immediate benefit (locally optimal choice), hoping that this leads to a globally optimal solution.

✅ Key Characteristics of Greedy Algorithms:
Greedy Choice Property: A global optimum can be arrived at by choosing a local optimum.

Optimal Substructure: A problem has optimal substructure if an optimal solution can be constructed from optimal solutions of its subproblems.

🔥 Popular Greedy Algorithm Questions with Code (in JavaScript):
1. Activity Selection Problem
Problem: Given start[] and end[] times of n activities, select the maximum number of activities that don't overlap.

📥 Input:

js
Copy
Edit
start = [1, 3, 0, 5, 8, 5];
end =   [2, 4, 6, 7, 9, 9];
📤 Output: 4 (Activities at index 0, 1, 3, and 4 can be selected)

Logic:

Sort activities by their ending time.

Select an activity if its start time is greater than or equal to the end time of the previously selected activity.

javascript
Copy
Edit
function maxActivities(start, end) {
  const activities = start.map((s, i) => ({ start: s, end: end[i] }));
  activities.sort((a, b) => a.end - b.end);

  let count = 1;
  let lastEnd = activities[0].end;

  for (let i = 1; i < activities.length; i++) {
    if (activities[i].start >= lastEnd) {
      count++;
      lastEnd = activities[i].end;
    }
  }
  return count;
}

// Test
console.log(maxActivities([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9])); // Output: 4
2. Fractional Knapsack
Problem: Given weights and values, choose items to maximize value without exceeding the weight limit W. You can take fractional items.

📥 Input:

js
Copy
Edit
values = [60, 100, 120];
weights = [10, 20, 30];
W = 50
📤 Output: 240 (Take 100% of 20 and 30, and 2/3 of 10)

Logic:

Calculate value/weight for each item.

Pick the item with the highest ratio first.

javascript
Copy
Edit
function fractionalKnapsack(values, weights, W) {
  const items = values.map((val, i) => ({
    value: val,
    weight: weights[i],
    ratio: val / weights[i]
  }));

  items.sort((a, b) => b.ratio - a.ratio);

  let totalValue = 0;
  for (const item of items) {
    if (W === 0) break;

    if (item.weight <= W) {
      totalValue += item.value;
      W -= item.weight;
    } else {
      totalValue += item.ratio * W;
      W = 0;
    }
  }
  return totalValue;
}

// Test
console.log(fractionalKnapsack([60, 100, 120], [10, 20, 30], 50)); // Output: 240
3. Minimum Number of Coins
Problem: Given coins of certain denominations and a target amount, find the minimum number of coins to make the amount.

📥 Input:

js
Copy
Edit
coins = [1, 2, 5, 10, 20, 50, 100, 500, 1000];  
amount = 93
📤 Output: 5 (50 + 20 + 20 + 2 + 1)

Logic:

Sort coins in descending order.

Pick the largest coin possible until the amount becomes 0.

javascript
Copy
Edit
function minCoins(coins, amount) {
  coins.sort((a, b) => b - a);
  const result = [];

  for (const coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      result.push(coin);
    }
  }
  return result;
}

// Test
console.log(minCoins([1, 2, 5, 10, 20, 50, 100, 500, 1000], 93)); // Output: [50, 20, 20, 2, 1]
4. Job Sequencing Problem
Problem: Given jobs with deadlines and profits, find a sequence of jobs to maximize total profit. Each job takes 1 unit time.

📥 Input:

js
Copy
Edit
jobs = [
  { id: 'a', deadline: 2, profit: 100 },
  { id: 'b', deadline: 1, profit: 19 },
  { id: 'c', deadline: 2, profit: 27 },
  { id: 'd', deadline: 1, profit: 25 },
  { id: 'e', deadline: 3, profit: 15 }
]
📤 Output: Max profit: 142 (Jobs a, c, e)

Logic:

Sort jobs by descending profit.

For each job, find the latest free time slot before its deadline.

javascript
Copy
Edit
function jobSequencing(jobs) {
  jobs.sort((a, b) => b.profit - a.profit);
  const maxDeadline = Math.max(...jobs.map(job => job.deadline));
  const slots = Array(maxDeadline).fill(null);
  let totalProfit = 0;

  for (const job of jobs) {
    for (let j = job.deadline - 1; j >= 0; j--) {
      if (slots[j] === null) {
        slots[j] = job;
        totalProfit += job.profit;
        break;
      }
    }
  }

  const jobOrder = slots.filter(Boolean).map(j => j.id);
  return { jobOrder, totalProfit };
}

// Test
const jobs = [
  { id: 'a', deadline: 2, profit: 100 },
  { id: 'b', deadline: 1, profit: 19 },
  { id: 'c', deadline: 2, profit: 27 },
  { id: 'd', deadline: 1, profit: 25 },
  { id: 'e', deadline: 3, profit: 15 }
];
console.log(jobSequencing(jobs));
// Output: { jobOrder: [ 'a', 'c', 'e' ], totalProfit: 142 }
1. Activity Selection Problem
Problem: Given start[] and end[] times of n activities, select the maximum number of activities that don't overlap.

📥 Input:

js
Copy
Edit
start = [1, 3, 0, 5, 8, 5];
end =   [2, 4, 6, 7, 9, 9];
📤 Output: 4 (Activities at index 0, 1, 3, and 4 can be selected)

Logic:

Sort activities by their ending time.

Select an activity if its start time is greater than or equal to the end time of the previously selected activity.

javascript
Copy
Edit
function maxActivities(start, end) {
  const activities = start.map((s, i) => ({ start: s, end: end[i] }));
  activities.sort((a, b) => a.end - b.end);

  let count = 1;
  let lastEnd = activities[0].end;

  for (let i = 1; i < activities.length; i++) {
    if (activities[i].start >= lastEnd) {
      count++;
      lastEnd = activities[i].end;
    }
  }
  return count;
}

// Test
console.log(maxActivities([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9])); // Output: 4
2. Fractional Knapsack
Problem: Given weights and values, choose items to maximize value without exceeding the weight limit W. You can take fractional items.

📥 Input:

js
Copy
Edit
values = [60, 100, 120];
weights = [10, 20, 30];
W = 50
📤 Output: 240 (Take 100% of 20 and 30, and 2/3 of 10)

Logic:

Calculate value/weight for each item.

Pick the item with the highest ratio first.

javascript
Copy
Edit
function fractionalKnapsack(values, weights, W) {
  const items = values.map((val, i) => ({
    value: val,
    weight: weights[i],
    ratio: val / weights[i]
  }));

  items.sort((a, b) => b.ratio - a.ratio);

  let totalValue = 0;
  for (const item of items) {
    if (W === 0) break;

    if (item.weight <= W) {
      totalValue += item.value;
      W -= item.weight;
    } else {
      totalValue += item.ratio * W;
      W = 0;
    }
  }
  return totalValue;
}

// Test
console.log(fractionalKnapsack([60, 100, 120], [10, 20, 30], 50)); // Output: 240
3. Minimum Number of Coins
Problem: Given coins of certain denominations and a target amount, find the minimum number of coins to make the amount.

📥 Input:

js
Copy
Edit
coins = [1, 2, 5, 10, 20, 50, 100, 500, 1000];  
amount = 93
📤 Output: 5 (50 + 20 + 20 + 2 + 1)

Logic:

Sort coins in descending order.

Pick the largest coin possible until the amount becomes 0.

javascript
Copy
Edit
function minCoins(coins, amount) {
  coins.sort((a, b) => b - a);
  const result = [];

  for (const coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      result.push(coin);
    }
  }
  return result;
}

// Test
console.log(minCoins([1, 2, 5, 10, 20, 50, 100, 500, 1000], 93)); // Output: [50, 20, 20, 2, 1]
4. Job Sequencing Problem
Problem: Given jobs with deadlines and profits, find a sequence of jobs to maximize total profit. Each job takes 1 unit time.

📥 Input:

js
Copy
Edit
jobs = [
  { id: 'a', deadline: 2, profit: 100 },
  { id: 'b', deadline: 1, profit: 19 },
  { id: 'c', deadline: 2, profit: 27 },
  { id: 'd', deadline: 1, profit: 25 },
  { id: 'e', deadline: 3, profit: 15 }
]
📤 Output: Max profit: 142 (Jobs a, c, e)

Logic:

Sort jobs by descending profit.

For each job, find the latest free time slot before its deadline.

javascript
Copy
Edit
function jobSequencing(jobs) {
  jobs.sort((a, b) => b.profit - a.profit);
  const maxDeadline = Math.max(...jobs.map(job => job.deadline));
  const slots = Array(maxDeadline).fill(null);
  let totalProfit = 0;

  for (const job of jobs) {
    for (let j = job.deadline - 1; j >= 0; j--) {
      if (slots[j] === null) {
        slots[j] = job;
        totalProfit += job.profit;
        break;
      }
    }
  }

  const jobOrder = slots.filter(Boolean).map(j => j.id);
  return { jobOrder, totalProfit };
}

// Test
const jobs = [
  { id: 'a', deadline: 2, profit: 100 },
  { id: 'b', deadline: 1, profit: 19 },
  { id: 'c', deadline: 2, profit: 27 },
  { id: 'd', deadline: 1, profit: 25 },
  { id: 'e', deadline: 3, profit: 15 }
];
console.log(jobSequencing(jobs));
// Output: { jobOrder: [ 'a', 'c', 'e' ], totalProfit: 142 }
📌 Summary Table
Problem	Technique	Key Action
Activity Selection	Sort by end time	Pick non-overlapping activities
Fractional Knapsack	Sort by value/weight	Pick items/fractions greedily
Minimum Number of Coins	Sort coins descending	Pick largest coin <= amount
Job Sequencing	Sort by profit, use deadlines	Assign job to latest free slot
Would you like me to explain Interval Problems, Huffman Coding, or Prim’s/Kruskal’s algorithms with JavaScript next?







You said:
explain with some more examples pls


ChatGPT said:
Memory updated
Of course, Sai Kiran! Let's explore a few more important and frequently asked Greedy Algorithm problems, all explained in JavaScript with sample inputs, outputs, and detailed step-by-step logic.

🔥 5. Gas Station (Circular Tour)
Problem: You're given two arrays: gas[i] is the gas at station i, and cost[i] is the cost to go from station i to i+1. Find the starting station index from which you can travel around the circuit once. If not possible, return -1.

📥 Input:

js
Copy
Edit
gas = [1, 2, 3, 4, 5];
cost = [3, 4, 5, 1, 2];
📤 Output: 3 (Start at index 3 and you can complete the circle)

Logic:

If total gas < total cost → not possible.

If you ever go into negative gas on the way, reset start to next station.

javascript
Copy
Edit
function canCompleteCircuit(gas, cost) {
  let total = 0, curr = 0, start = 0;

  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
    curr += gas[i] - cost[i];
    if (curr < 0) {
      curr = 0;
      start = i + 1;
    }
  }
  return total < 0 ? -1 : start;
}

// Test
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // Output: 3
🔥 6. Lemonaid Change Problem
Problem: People are buying lemonade for $5. Each gives either $5, $10, or $20. Can you give change to each person correctly?

📥 Input: [5, 5, 5, 10, 20]
📤 Output: true (You can give change correctly)

Logic:

Track how many $5 and $10 you have.

Prioritize giving change using higher denominations properly.

javascript
Copy
Edit
function lemonadeChange(bills) {
  let five = 0, ten = 0;
  for (let bill of bills) {
    if (bill === 5) five++;
    else if (bill === 10) {
      if (five === 0) return false;
      five--; ten++;
    } else {
      if (ten > 0 && five > 0) {
        ten--; five--;
      } else if (five >= 3) {
        five -= 3;
      } else return false;
    }
  }
  return true;
}

// Test
console.log(lemonadeChange([5, 5, 5, 10, 20])); // Output: true
🔥 7. Candy Distribution
Problem: Each child has a rating. You must give at least 1 candy per child. Children with a higher rating than their neighbors should get more candies.

📥 Input: [1, 0, 2]
📤 Output: 5 (Candy distribution: [2, 1, 2])

Logic:

First pass (left to right): if current rating > previous, increment candies.

Second pass (right to left): if current rating > next, make sure candy count is more than next.

javascript
Copy
Edit
function candy(ratings) {
  const n = ratings.length;
  const candies = Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  return candies.reduce((a, b) => a + b, 0);
}

// Test
console.log(candy([1, 0, 2])); // Output: 5
🔥 8. Remove Overlapping Intervals
Problem: Given intervals, remove the minimum number of intervals so the rest don’t overlap.

📥 Input: [[1,2],[2,3],[3,4],[1,3]]
📤 Output: 1 (Remove [1,3])

Logic:

Sort intervals by end time.

If current start < previous end → overlap, count it.

javascript
Copy
Edit
function eraseOverlapIntervals(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let prevEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prevEnd) {
      count++;
    } else {
      prevEnd = intervals[i][1];
    }
  }
  return count;
}

// Test
console.log(eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])); // Output: 1