Linked List in Detail
A Linked List is a linear data structure that consists of a sequence of elements, where each element is stored in a node. Unlike arrays, linked lists do not store elements in contiguous memory locations. Instead, each node points to the next node in the sequence, allowing for dynamic memory allocation.

Key Concepts of Linked Lists:
Node:

A node is the fundamental unit of a linked list. It contains two parts:

Data: Stores the actual data (can be any type of data, such as a number, string, etc.).

Next: A reference (or pointer) to the next node in the list.

Head:

The head is the first node in the linked list. It is used to access the list.

Tail (optional):

The tail is the last node in the linked list, which points to null, indicating the end of the list.

Null:

The last node's next pointer is set to null, which signifies the end of the list.

Types of Linked Lists:
Singly Linked List:

Each node points to the next node in the list. There is only one direction of traversal (from head to tail).

Doubly Linked List:

Each node has two pointers: one pointing to the next node and one pointing to the previous node. This allows traversal in both directions (forward and backward).

Circular Linked List:

In a circular linked list, the last node points back to the head, forming a circle. It can be either singly or doubly circular.

Operations on Linked Lists:
Insertion:

Insert an element at the beginning, end, or at a specific position in the list.

Deletion:

Remove an element from the beginning, end, or a specific position in the list.

Traversal:

Traverse the list and print the elements or perform some operation on each node.

Search:

Search for an element in the list and return its position or data.

Reverse:

Reverse the order of the elements in the list.

Implementation of a Singly Linked List in JavaScript:
Here's how you can implement a Singly Linked List in JavaScript:

javascript
Copy
class Node {
    constructor(data) {
        this.data = data; // Node's data
        this.next = null; // Pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // Initialize the head of the list
    }

    // Insert a new node at the end of the list
    insertAtEnd(data) {
        let newNode = new Node(data);
        
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        
        let current = this.head;
        while (current.next !== null) {
            current = current.next; // Traverse to the last node
        }
        
        current.next = newNode; // Set the next of last node to new node
    }

    // Insert a new node at the beginning of the list
    insertAtBegin(data) {
        let newNode = new Node(data);
        newNode.next = this.head; // Set new node's next to the current head
        this.head = newNode; // Make new node the head
    }

    // Delete the node at the beginning
    deleteAtBegin() {
        if (this.head === null) return; // If list is empty, do nothing
        this.head = this.head.next; // Move the head to the next node
    }

    // Delete the node at the end
    deleteAtEnd() {
        if (this.head === null) return; // If list is empty, do nothing
        if (this.head.next === null) {
            this.head = null; // If there is only one element, make head null
            return;
        }
        
        let current = this.head;
        while (current.next !== null && current.next.next !== null) {
            current = current.next; // Traverse to second last node
        }
        
        current.next = null; // Set the second last node's next to null
    }

    // Print the elements of the linked list
    printList() {
        let current = this.head;
        let list = '';
        
        while (current !== null) {
            list += current.data + " -> ";
            current = current.next; // Move to the next node
        }
        
        console.log(list + "null");
    }

    // Search for an element in the linked list
    search(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return true; // Element found
            }
            current = current.next; // Move to next node
        }
        return false; // Element not found
    }

    // Reverse the linked list
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next; // Store the next node
            current.next = prev; // Reverse the current node's next pointer
            prev = current; // Move prev and current one step forward
            current = next;
        }
        
        this.head = prev; // Set the new head to the last node
    }
}

let ll = new LinkedList();
ll.insertAtEnd(10);
ll.insertAtEnd(20);
ll.insertAtEnd(30);
ll.insertAtBegin(5);
ll.printList(); // 5 -> 10 -> 20 -> 30 -> null
ll.deleteAtEnd();
ll.printList(); // 5 -> 10 -> 20 -> null
ll.deleteAtBegin();
ll.printList(); // 10 -> 20 -> null
console.log(ll.search(20)); // true
ll.reverse();
ll.printList(); // 20 -> 10 -> null
Explanation of the Code:
Node Class:

Represents an individual node in the linked list. Each node contains data and a next pointer that points to the next node in the list.

LinkedList Class:

insertAtEnd(data): Adds a node with the specified data at the end of the list. If the list is empty, it creates the first node.

insertAtBegin(data): Adds a node with the specified data at the beginning of the list.

deleteAtBegin(): Removes the first node from the list.

deleteAtEnd(): Removes the last node from the list.

printList(): Traverses the list and prints the data of each node.

search(data): Searches for a node with the specified data and returns true if found, otherwise false.

reverse(): Reverses the linked list by iterating through the list and updating the next pointers.

Time Complexity of Operations:
Insertion at the end: O(n), where n is the number of elements in the list (since we need to traverse the whole list to find the last node).

Insertion at the beginning: O(1), constant time (since we only need to update the head pointer).

Deletion at the end: O(n), as we need to traverse to the second last node.

Deletion at the beginning: O(1), constant time (since we only need to update the head pointer).

Search: O(n), since we may need to traverse the whole list.

Reversing the list: O(n), since we need to visit each node once.

Advantages of Linked Lists:
Dynamic Size: Linked lists can grow or shrink in size dynamically, unlike arrays, which require a fixed size.

Efficient Insertions/Deletions: Insertions and deletions can be performed in constant time O(1) if the position is known, especially at the beginning or the end of the list.

Disadvantages of Linked Lists:
Memory Overhead: Each node requires extra memory for storing the reference to the next node.

Sequential Access: To access an element, you need to traverse the list from the head, resulting in a time complexity of O(n) for access.

Types of Linked Lists
Doubly Linked List:

In a doubly linked list, each node contains two references: one pointing to the next node and one pointing to the previous node. This allows for traversal in both directions (forward and backward).

Example:

javascript
Copy
class DoublyNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at the beginning
    insertAtBegin(data) {
        let newNode = new DoublyNode(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Print the list (forward direction)
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let doublyList = new DoublyLinkedList();
doublyList.insertAtBegin(10);
doublyList.insertAtBegin(20);
doublyList.printList(); // 20 10
Circular Linked List:

A circular linked list is a linked list where the last node's next pointer points back to the head node, creating a circle. In a singly circular linked list, the last node points to the first node, while in a doubly circular linked list, both the last node and the first node point to each other.

Example:

javascript
Copy
class CircularLinkedList {
    constructor() {
        this.head = null;
    }

    insertAtBegin(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            newNode.next = this.head;
            let temp = this.head;
            while (temp.next !== this.head) {
                temp = temp.next;
            }
            temp.next = newNode;
            this.head = newNode;
        }
    }

    printList() {
        if (this.head === null) return;
        let current = this.head;
        do {
            console.log(current.data);
            current = current.next;
        } while (current !== this.head);
    }
}

let circularList = new CircularLinkedList();
circularList.insertAtBegin(10);
circularList.insertAtBegin(20);
circularList.printList(); // 20 10
Conclusion
A linked list is an important data structure in computer science, useful for dynamic memory allocation and situations where frequent insertions and deletions are needed. Its flexibility comes at the cost of higher memory usage and slower element access compared to arrays. There are different variations of linked lists (singly, doubly, and circular) that offer different advantages depending on the use case. By understanding linked lists and practicing their implementation, you can become proficient in solving problems related to dynamic data structures.
Linked lists and doubly linked lists are fundamental data structures that are commonly used in coding interviews and algorithmic challenges. Below are some of the most important and commonly asked questions related to Singly Linked Lists and Doubly Linked Lists, along with their solutions in JavaScript.

1. Reverse a Singly Linked List
Problem: Given a singly linked list, reverse it.

Solution: We can reverse a linked list by changing the next pointer of each node.

javascript
Copy
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at the end of the list
    insertAtEnd(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Reverse the linked list
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        
        while (current !== null) {
            next = current.next;  // Save next node
            current.next = prev;   // Reverse current node's pointer
            prev = current;        // Move prev one step forward
            current = next;        // Move current one step forward
        }
        this.head = prev;  // New head is the last node
    }

    // Print the list
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let ll = new LinkedList();
ll.insertAtEnd(10);
ll.insertAtEnd(20);
ll.insertAtEnd(30);
console.log("Original List:");
ll.printList();
ll.reverse();
console.log("Reversed List:");
ll.printList();
Explanation:

Time Complexity: O(n) where n is the number of nodes in the list, as we visit each node once.

Space Complexity: O(1), no extra space is used except for pointers.

2. Detect a Cycle in a Linked List
Problem: Given a linked list, check if it contains a cycle.

Solution: We can detect a cycle in a linked list using Floyd's cycle-finding algorithm (also known as the Tortoise and Hare approach). The idea is to have two pointers: one moves one step at a time, while the other moves two steps at a time. If there’s a cycle, the two pointers will eventually meet.

javascript
Copy
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at the end of the list
    insertAtEnd(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Detect cycle using Floyd’s cycle-finding algorithm
    hasCycle() {
        let slow = this.head;
        let fast = this.head;
        
        while (fast !== null && fast.next !== null) {
            slow = slow.next;           // Move slow pointer by 1 step
            fast = fast.next.next;      // Move fast pointer by 2 steps
            
            if (slow === fast) {
                return true;            // Cycle detected
            }
        }
        return false;  // No cycle
    }

    // Print the list
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let ll = new LinkedList();
ll.insertAtEnd(10);
ll.insertAtEnd(20);
ll.insertAtEnd(30);
ll.insertAtEnd(40);
ll.head.next.next.next.next = ll.head.next; // Creating a cycle for testing

console.log("Does the list have a cycle? " + ll.hasCycle());
Explanation:

Time Complexity: O(n), where n is the number of nodes in the list.

Space Complexity: O(1), no extra space is used except for the two pointers.

3. Merge Two Sorted Linked Lists
Problem: Given two sorted linked lists, merge them into a single sorted linked list.

Solution: We can merge two sorted linked lists by comparing their nodes and attaching the smaller node to the new list.

javascript
Copy
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at the end of the list
    insertAtEnd(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Merge two sorted linked lists
    mergeLists(list1, list2) {
        let dummy = new Node(0); // Dummy node to simplify the merge process
        let current = dummy;
        
        while (list1 !== null && list2 !== null) {
            if (list1.data < list2.data) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }
            current = current.next;
        }

        if (list1 !== null) {
            current.next = list1;
        }
        if (list2 !== null) {
            current.next = list2;
        }

        return dummy.next;
    }

    // Print the list
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let ll1 = new LinkedList();
ll1.insertAtEnd(1);
ll1.insertAtEnd(3);
ll1.insertAtEnd(5);

let ll2 = new LinkedList();
ll2.insertAtEnd(2);
ll2.insertAtEnd(4);
ll2.insertAtEnd(6);

let mergedList = new LinkedList();
mergedList.head = mergedList.mergeLists(ll1.head, ll2.head);
mergedList.printList();
Explanation:

Time Complexity: O(n + m), where n and m are the lengths of the two linked lists.

Space Complexity: O(1), no additional space is used apart from the result list.

4. Find the Middle of a Linked List
Problem: Given a singly linked list, find its middle element.

Solution: We can find the middle element by using two pointers: one moves one step at a time, and the other moves two steps at a time. When the faster pointer reaches the end, the slower pointer will be at the middle.

javascript
Copy
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at the end of the list
    insertAtEnd(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Find the middle of the linked list
    findMiddle() {
        let slow = this.head;
        let fast = this.head;
        
        while (fast !== null && fast.next !== null) {
            slow = slow.next;  // Move slow by 1 step
            fast = fast.next.next;  // Move fast by 2 steps
        }

        return slow ? slow.data : null;
    }

    // Print the list
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let ll = new LinkedList();
ll.insertAtEnd(1);
ll.insertAtEnd(2);
ll.insertAtEnd(3);
ll.insertAtEnd(4);
ll.insertAtEnd(5);

console.log("Middle element: " + ll.findMiddle());
Explanation:

Time Complexity: O(n), where n is the number of nodes in the list.

Space Complexity: O(1), no extra space is used.

5. Delete a Node in a Linked List (Given the Node)
Problem: Given a node in a singly linked list, delete that node (without access to the head of the list).

Solution: The solution is to copy the data from the next node into the current node and then delete the next node.

javascript
Copy
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at the end of the list
    insertAtEnd(data) {
        let newNode = new Node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Delete a node (given the node to be deleted)
    deleteNode(node) {
        if (node === null || node.next === null) {
            return; // Can't delete if node is null or it's the last node
        }
        node.data = node.next.data;  // Copy the next node's data into the current node
        node.next = node.next.next;  // Remove the next node
    }

    // Print the list
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let ll = new LinkedList();
ll.insertAtEnd(1);
ll.insertAtEnd(2);
ll.insertAtEnd(3);
ll.insertAtEnd(4);
ll.insertAtEnd(5);

let nodeToDelete = ll.head.next.next; // Node with value 3
ll.deleteNode(nodeToDelete);
ll.printList(); // 1 2 4 5
Explanation:

Time Complexity: O(1), as we are only modifying the current node and the next node.

Space Complexity: O(1), no extra space is used.

6. Doubly Linked List - Insertion, Deletion, and Traversal
Problem: Perform basic operations (insertion at the beginning, deletion, traversal) on a Doubly Linked List.

Solution: In a Doubly Linked List, each node has two pointers: one pointing to the previous node and one pointing to the next node. Operations on a doubly linked list are more efficient for both ends.

javascript
Copy
class DoublyNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
    }

    // Insert at the beginning
    insertAtBegin(data) {
        let newNode = new DoublyNode(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    // Delete a node from the list
    deleteNode(node) {
        if (node === null) return;
        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;
        if (node === this.head) this.head = node.next;
    }

    // Print the list (forward direction)
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

let dll = new DoublyLinkedList();
dll.insertAtBegin(10);
dll.insertAtBegin(20);
dll.insertAtBegin(30);

dll.printList(); // 30 20 10

let nodeToDelete = dll.head.next; // Node with value 20
dll.deleteNode(nodeToDelete);

dll.printList(); // 30 10
Explanation:

Time Complexity for insertion: O(1), constant time when inserting at the head.

Time Complexity for deletion: O(1) if you have direct access to the node to be deleted.