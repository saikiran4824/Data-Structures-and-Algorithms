Queues in Detail
A queue is another linear data structure that follows the First In First Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed, much like a line at a supermarket: the person who gets in first, gets served first.

Basic Operations on Queues:
enqueue(item): Adds an item to the end of the queue.

dequeue(): Removes and returns the item from the front of the queue.

front(): Returns the item at the front of the queue without removing it.

isEmpty(): Returns true if the queue is empty, otherwise false.

size(): Returns the number of items in the queue.

How Queue Works?
Queues can be implemented using arrays, linked lists, or two stacks. In JavaScript, we can use an array to implement a queue with the push() (enqueue) and shift() (dequeue) methods.

Here is a simple queue implementation in JavaScript:

javascript
Copy
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);  // Add item to the end of the queue
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();  // Remove and return the item from the front
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];  // Return the item at the front without removing it
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }
}

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print(); // "10,20,30"
console.log(queue.dequeue()); // 10
queue.print(); // "20,30"
console.log(queue.front()); // 20
Applications of Queues
Breadth-First Search (BFS):

Queues are crucial in BFS algorithms, where nodes are explored level by level in a graph.

Task Scheduling:

Queues are used in job scheduling, where tasks are executed in the order they are received.

Print Queue:

In printing systems, jobs are queued up and processed in the order they are received.

Handling Requests in Web Servers:

Web servers often handle requests in a queue to process them sequentially.

Good Queue-related DSA Problems
1. Implement Stack Using Queues
Problem: Implement a stack using two queues. The stack should support the following operations: push(x), pop(), and top().

Solution:

javascript
Copy
class StackUsingQueues {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(x) {
        this.queue1.push(x);  // Push element into queue1
    }

    pop() {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift());  // Move all elements except the last to queue2
        }
        let poppedElement = this.queue1.shift();  // Pop the last element from queue1
        [this.queue1, this.queue2] = [this.queue2, this.queue1];  // Swap the queues
        return poppedElement;
    }

    top() {
        return this.queue1[this.queue1.length - 1];  // Return the last element in queue1
    }

    isEmpty() {
        return this.queue1.length === 0;
    }
}

let stack = new StackUsingQueues();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.top()); // 2
Explanation:

Queue Usage: We use two queues to simulate the behavior of a stack. To pop or peek, we move all elements except the last one from queue1 to queue2, and the last element in queue1 is the top of the stack.

Time Complexity:

push() operation takes O(1).

pop() and top() operations take O(n) due to the transfer between queues.

2. Reverse First K Elements of Queue
Problem: Given a queue and an integer k, reverse the first k elements of the queue. The other elements should remain in the same order.

Solution:

javascript
Copy
function reverseQueue(queue, k) {
    if (k > queue.length || k <= 0) return queue;

    let stack = [];
    
    // Step 1: Push the first k elements into a stack
    for (let i = 0; i < k; i++) {
        stack.push(queue.shift());
    }

    // Step 2: Enqueue the stack elements back to the queue
    while (stack.length > 0) {
        queue.push(stack.pop());
    }

    // Step 3: Move the remaining elements to the back of the queue
    for (let i = 0; i < queue.length - k; i++) {
        queue.push(queue.shift());
    }

    return queue;
}

let queue = [1, 2, 3, 4, 5];
console.log(reverseQueue(queue, 3)); // [3, 2, 1, 4, 5]
Explanation:

Queue Usage: First, we reverse the first k elements by using a stack. Then, we shift the rest of the queue elements to maintain the original order.

Time Complexity: O(n), where n is the number of elements in the queue.

Space Complexity: O(k) for the stack.

3. Circular Queue
Problem: Implement a circular queue. A circular queue is a queue in which the last position is connected back to the first position, forming a circle.

Solution:

javascript
Copy
class CircularQueue {
    constructor(k) {
        this.size = k;
        this.queue = new Array(k);
        this.front = -1;
        this.rear = -1;
    }

    enqueue(value) {
        if ((this.rear + 1) % this.size === this.front) {
            console.log("Queue is Full");
            return false;
        }

        if (this.front === -1) {
            this.front = 0;
        }

        this.rear = (this.rear + 1) % this.size;
        this.queue[this.rear] = value;
        return true;
    }

    dequeue() {
        if (this.front === -1) {
            console.log("Queue is Empty");
            return false;
        }

        const value = this.queue[this.front];
        if (this.front === this.rear) {
            this.front = this.rear = -1;
        } else {
            this.front = (this.front + 1) % this.size;
        }
        return value;
    }

    frontItem() {
        if (this.front === -1) return null;
        return this.queue[this.front];
    }

    rearItem() {
        if (this.rear === -1) return null;
        return this.queue[this.rear];
    }

    isEmpty() {
        return this.front === -1;
    }

    isFull() {
        return (this.rear + 1) % this.size === this.front;
    }
}

let cq = new CircularQueue(3);
console.log(cq.enqueue(10)); // true
console.log(cq.enqueue(20)); // true
console.log(cq.enqueue(30)); // true
console.log(cq.enqueue(40)); // "Queue is Full"
console.log(cq.dequeue()); // 10
console.log(cq.frontItem()); // 20
Explanation:

Queue Usage: In a circular queue, the front and rear pointers wrap around when they reach the end of the queue, allowing for efficient space utilization. The queue behaves as if it's circular, which eliminates the need for shifting elements when space becomes available.

Time Complexity: All operations (enqueue, dequeue, etc.) are O(1) due to the circular nature of the queue.

Space Complexity: O(k), where k is the size of the queue.

4. Implement Queue Using Stacks
Problem: Implement a queue using two stacks. The queue should support the following operations: enqueue(x), dequeue().

Solution:

javascript
Copy
class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(x) {
        this.stack1.push(x);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            if (this.stack1.length === 0) {
                return "Queue is empty";
            }
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

    front() {
        if (this.stack2.length === 0) {
            if (this.stack1.length === 0) {
                return "Queue is empty";
            }
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2[this.stack2.length - 1];
    }
}

let queue = new QueueUsingStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.front()); // 2
Explanation:

Stack Usage: We use two stacks to simulate the behavior of a queue. When we dequeue, we move elements from stack1 to stack2, and we pop from stack2.

Time Complexity:

enqueue(x) is O(1).

dequeue() is O(n) in the worst case when we need to move elements from stack1 to stack2.

Conclusion
Queues are fundamental data structures used in many real-world scenarios, including job scheduling, BFS traversal, and buffering tasks. The problems above illustrate how queues can be implemented and used to solve common algorithmic challenges efficiently. By practicing these problems, you'll gain a better understanding of how to apply queues in various contexts