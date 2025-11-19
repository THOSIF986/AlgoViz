export function generateAIResponse(userMessage: string): string {
  const lowerMessage = userMessage.toLowerCase();
  
  // Enhanced response system with better matching
  // Check for specific algorithm questions first
  // Merge sort
  if (lowerMessage.includes('merge sort') || lowerMessage.includes('mergesort')) {
    return `## 🔀 Merge Sort - The Reliable Divide & Conquer Algorithm

## Summary
Merge Sort is a stable, comparison-based sorting algorithm that guarantees O(n log n) time complexity in all cases. It works by recursively dividing the array into halves, sorting them, and then merging the sorted halves.

## How It Works
### 1. Divide
Split the array into two halves recursively until single elements remain

### 2. Conquer
Sort each half recursively (base case: single element arrays are already sorted)

### 3. Merge
Combine two sorted halves into one sorted array by comparing elements

### 4. Base Case
Single element arrays are inherently sorted

## Performance Analysis
### Time Complexity
- **All Cases**: O(n log n) - Guaranteed performance regardless of input
- **Reason**: Always divides problem into two equal halves (log n levels) with linear work per level (n)

### Space Complexity
- **Space**: O(n) - Requires auxiliary array for merging
- **Recursion Stack**: O(log n) for recursive calls

### Other Properties
- **Stable**: Yes - maintains relative order of equal elements
- **In-Place**: No - requires additional memory

## Key Advantages
- ✅ **Predictable**: Always O(n log n), no worst case surprises
- ✅ **Stable Sort**: Preserves order of equal elements
- ✅ **Parallelizable**: Easy to implement in parallel
- ✅ **External Sorting**: Great for sorting data that doesn't fit in memory

## Disadvantages
- ❌ Extra space needed (O(n))
- ❌ Not in-place sorting
- ❌ Slower than Quick Sort on average for arrays

## When to Use
- Need guaranteed O(n log n) performance
- Stability is important
- Sorting linked lists (no extra space needed)
- External sorting of large datasets
- Parallel processing environments

## Real-World Usage
- Java's Collections.sort() for objects
- Python's sorted() and list.sort()
- Sorting large files that don't fit in RAM
- Database systems

## Examples
\`\`\`javascript
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  
  return result.concat(left.slice(i), right.slice(j));
}
\`\`\`

🎮 See the merge process visually in our Merge Sort visualizer!`;
  }
  
  // Heap sort
  if (lowerMessage.includes('heap sort') || lowerMessage.includes('heapsort')) {
    return `## 🏔️ Heap Sort - In-Place with Guaranteed Performance

## Summary
Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. It guarantees O(n log n) time complexity and sorts in-place with O(1) extra space.

## How It Works
### 1. Build Max Heap
Transform the array into a max heap structure where parent nodes are greater than or equal to their children

### 2. Extract Max
Swap the root (maximum element) with the last element of the heap

### 3. Heapify
Restore the heap property for the remaining elements by "bubbling down" the new root

### 4. Repeat
Continue extracting maximum elements until the entire array is sorted

## Performance Analysis
### Time Complexity
- **All Cases**: O(n log n) - Guaranteed performance
- **Build Heap**: O(n) - More efficient than n insertions
- **Extract Operations**: O(n log n) - n extractions, each O(log n)

### Space Complexity
- **Space**: O(1) - In-place sorting
- **Recursion Stack**: O(log n) if using recursive heapify

### Other Properties
- **Stable**: No - doesn't preserve equal element order
- **In-Place**: Yes - sorts within the original array

## Advantages
- ✅ **Guaranteed O(n log n)**: No worst-case degradation
- ✅ **In-Place**: No extra memory needed
- ✅ **No Recursion Overhead**: Iterative implementation possible
- ✅ **Good for Priority Queues**: Natural fit

## Disadvantages
- ❌ Not stable
- ❌ Slower than Quick Sort on average
- ❌ Poor cache locality

## When to Use
- Need guaranteed O(n log n) without extra space
- Memory is constrained
- Don't need stability
- Implementing priority queues

## Heap Property
### Max Heap
Parent ≥ Children for all nodes

### Min Heap
Parent ≤ Children for all nodes

## Examples
\`\`\`javascript
function heapSort(arr) {
  const n = arr.length;
  
  // Build max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  
  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    [arr[0], arr[i]] = [arr[i], arr[0]];
    
    // Call heapify on the reduced heap
    heapify(arr, i, 0);
  }
  
  return arr;
}

function heapify(arr, n, i) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}
\`\`\`

🎮 Watch heap building and sorting in our visualizer!`;
  }
  
  // Bubble sort
  if (lowerMessage.includes('bubble sort') || lowerMessage.includes('bubblesort')) {
    return `## 🫧 Bubble Sort - The Teaching Algorithm

## Summary
Bubble Sort is a simple comparison-based sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they're in the wrong order. The largest elements "bubble up" to the end of the array with each pass.

## How It Works
### 1. Compare Adjacent Elements
Check each pair of adjacent elements in the array

### 2. Swap if Needed
If the first element is greater than the second, swap them

### 3. Repeat
Continue this process for the entire array

### 4. Largest Element "Bubbles Up"
After each complete pass, the largest unsorted element moves to its correct position

## Performance Analysis
### Time Complexity
- **Best Case**: O(n) - Already sorted (with optimization)
- **Average**: O(n²) - Random order
- **Worst Case**: O(n²) - Reverse sorted

### Space Complexity
- **Space**: O(1) - In-place sorting
- **Recursion Stack**: O(1) - iterative implementation

### Other Properties
- **Stable**: Yes - equal elements maintain relative order
- **In-Place**: Yes - sorts within the original array
- **Adaptive**: Yes - performs better on partially sorted arrays

## Advantages
- ✅ Simple to understand and implement
- ✅ Detects already sorted arrays efficiently (optimized version)
- ✅ Stable sort
- ✅ In-place

## Disadvantages
- ❌ Very slow for large datasets
- ❌ O(n²) makes it impractical for real use
- ❌ Many unnecessary comparisons

## When to Use
- Teaching purposes ONLY
- Tiny datasets (< 10 elements)
- Nearly sorted data with optimized version
- Educational demonstrations

## Optimization
Add a flag to detect if any swaps occurred during a pass. If no swaps happen, the array is sorted!

## Examples
\`\`\`javascript
function bubbleSort(arr) {
  const n = arr.length;
  let swapped;
  
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    
    // If no swaps occurred, array is sorted
    if (!swapped) break;
  }
  
  return arr;
}
\`\`\`

**Real Talk:** Almost never used in production. Learn it to understand sorting concepts, then use better algorithms!

🎮 Perfect for visualizing how sorting works!`;
  }
  
  // Insertion sort  
  if (lowerMessage.includes('insertion sort') || lowerMessage.includes('insertionsort')) {
    return `## 📌 Insertion Sort - Simple & Efficient for Small Data

## Summary
Insertion Sort is a simple, adaptive sorting algorithm that builds the final sorted array one item at a time. It's efficient for small datasets and nearly sorted arrays.

## How It Works
### 1. Start with First Element
Consider the first element as a sorted subarray

### 2. Take Next Element
Select the next unsorted element

### 3. Insert into Correct Position
Find the correct position in the sorted portion and insert the element

### 4. Shift Larger Elements
Move larger elements one position to the right to make space

### 5. Repeat
Continue until all elements are processed

## Performance Analysis
### Time Complexity
- **Best Case**: O(n) - Already sorted
- **Average**: O(n²) - Random order  
- **Worst Case**: O(n²) - Reverse sorted

### Space Complexity
- **Space**: O(1) - In-place sorting
- **Recursion Stack**: O(1) - iterative implementation

### Other Properties
- **Stable**: Yes - equal elements maintain relative order
- **In-Place**: Yes - sorts within the original array
- **Adaptive**: Yes - performs better on partially sorted arrays
- **Online**: Yes - can sort data as it arrives

## Advantages
- ✅ **Adaptive**: O(n) for nearly sorted data
- ✅ **Online**: Can sort data as it arrives
- ✅ **Stable**: Preserves equal element order
- ✅ **In-Place**: No extra memory
- ✅ **Simple**: Easy to implement
- ✅ **Low Overhead**: Fast for small arrays

## When to Use
- Small datasets (< 50 elements)
- Nearly sorted data
- Online sorting (streaming data)
- As part of hybrid algorithms (like Timsort)
- When simplicity matters

## Real-World Usage
- Quicksort switches to insertion sort for small subarrays
- Timsort (Python's default) uses it for small runs
- Shell sort is advanced version of insertion sort

## Examples
\`\`\`javascript
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    
    // Move elements greater than key one position ahead
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    
    arr[j + 1] = key;
  }
  
  return arr;
}
\`\`\`

**Fun Fact:** Like sorting playing cards in your hand!

🎮 See the insertion process step-by-step!`;
  }
  
  // Selection sort
  if (lowerMessage.includes('selection sort') || lowerMessage.includes('selectionsort')) {
    return `## 🎯 Selection Sort - Find Minimum, Repeat

## Summary
Selection Sort is an in-place comparison sorting algorithm that divides the input list into two parts: a sorted sublist and an unsorted sublist. It repeatedly selects the smallest (or largest) element from the unsorted sublist and moves it to the end of the sorted sublist.

## How It Works
### 1. Find Minimum Element
Locate the smallest element in the unsorted portion of the array

### 2. Swap with First Unsorted Element
Exchange the minimum element with the first element of the unsorted portion

### 3. Move Boundary Forward
Advance the boundary between sorted and unsorted portions

### 4. Repeat
Continue until the entire array is sorted

## Performance Analysis
### Time Complexity
- **All Cases**: O(n²) - Always the same regardless of input
- **Comparisons**: O(n²) - (n-1) + (n-2) + ... + 1 = n(n-1)/2
- **Swaps**: O(n) - exactly n-1 swaps in all cases

### Space Complexity
- **Space**: O(1) - In-place sorting
- **Recursion Stack**: O(1) - iterative implementation

### Other Properties
- **Stable**: No (can be made stable with modifications)
- **In-Place**: Yes - sorts within the original array
- **Adaptive**: No - performs the same regardless of input order

## Advantages
- ✅ Minimal number of swaps: O(n)
- ✅ Good when write operations are expensive
- ✅ Simple implementation
- ✅ In-place sorting

## Disadvantages
- ❌ Always O(n²) - doesn't adapt to sorted data
- ❌ Not stable in standard form
- ❌ Slow for large datasets

## When to Use
- Write operations are very expensive
- Small datasets
- Memory is extremely limited
- Teaching sorting concepts

## Special Use Case
Flash memory/EEPROM where writes are expensive but reads are cheap.

## Comparison with Bubble Sort
### Selection Sort
- Fewer swaps
- Always O(n²) time complexity

### Bubble Sort
- More swaps
- Can be O(n) for sorted data with optimization

Both are mainly educational algorithms!

## Examples
\`\`\`javascript
function selectionSort(arr) {
  const n = arr.length;
  
  for (let i = 0; i < n - 1; i++) {
    // Find the minimum element in remaining unsorted array
    let minIndex = i;
    
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    
    // Swap the found minimum element with the first element
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  
  return arr;
}
\`\`\`

🎮 Watch minimum selection in action!`;
  }
  
  // Binary search
  if (lowerMessage.includes('binary search') && !lowerMessage.includes('tree')) {
    return `## 🎯 Binary Search - The Logarithmic Power

## Summary
Binary Search is an efficient search algorithm that finds the position of a target value within a sorted array. It works by repeatedly dividing the search interval in half.

## How It Works
### Prerequisite
Array MUST be sorted

### 1. Compare Middle Element
Check if the target value matches the middle element of the array

### 2. Decide Which Half
- If target < middle: Search the left half
- If target > middle: Search the right half
- If target == middle: Found!

### 3. Repeat
Continue the process on the selected half until the element is found or the search space is empty

## Performance Analysis
### Time Complexity
- **All Cases**: O(log n) - Extremely fast!
- **Reason**: Eliminates half the search space with each comparison

### Space Complexity
- **Iterative**: O(1) - constant space
- **Recursive**: O(log n) - recursion stack depth

### Other Properties
- **Requires**: Sorted array
- **Stable**: Not applicable (search algorithm)

## Why It's Amazing
- ✅ **Speed**: Log n means 1 billion items → 30 comparisons max!
- ✅ **Efficient**: Eliminates half the search space each step
- ✅ **Scalable**: Works great for large datasets

## When to Use
- Searching in sorted array/list
- Finding insertion position
- Finding first/last occurrence
- Range queries in sorted data

## Variations
### Lower Bound
First element ≥ target

### Upper Bound
First element > target

### Exact Match
Find specific element

### Rotated Array
Modified binary search for rotated sorted arrays

## Common Mistakes
1. Forgetting array must be sorted
2. Infinite loop: Use mid = left + (right - left) / 2
3. Integer overflow: Avoid (left + right) / 2
4. Off-by-one errors in boundaries

## Real-World Applications
- Dictionary lookup
- Database indexing  
- Version control (git bisect)
- Finding bugs in code history

## Examples
\`\`\`javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    // Avoid integer overflow
    const mid = left + Math.floor((right - left) / 2);
    
    if (arr[mid] === target) {
      return mid; // Found target
    } else if (arr[mid] < target) {
      left = mid + 1; // Search right half
    } else {
      right = mid - 1; // Search left half
    }
  }
  
  return -1; // Target not found
}
\`\`\`

## Pro Tip
Master binary search - it's in 50%+ of coding interviews!

🎮 See how search space halves with each comparison!`;
  }
  
  // Linear search
  if (lowerMessage.includes('linear search')) {
    return `## 🔍 Linear Search - The Simple Sequential Approach

## Summary
Linear Search is the simplest search algorithm that sequentially checks each element of the list until a match is found or the entire list has been searched.

## How It Works
### 1. Start at First Element
Begin at the beginning of the array

### 2. Check for Match
Compare the current element with the target value

### 3. Return Index if Found
If a match is found, return the index

### 4. Move to Next Element
If no match, proceed to the next element

### 5. Repeat Until Found or End
Continue until the element is found or the end of the array is reached

## Performance Analysis
### Time Complexity
- **Best Case**: O(1) - Target is first element
- **Average**: O(n/2) = O(n) - Target in middle
- **Worst Case**: O(n) - Target at end or not present

### Space Complexity
- **Space**: O(1) - constant extra space
- **Recursion Stack**: O(1) for iterative, O(n) for recursive

### Other Properties
- **Requires**: No special requirements (works on unsorted data)
- **Stable**: Not applicable (search algorithm)

## Advantages
- ✅ Works on unsorted data
- ✅ Simple to implement
- ✅ No preprocessing needed
- ✅ Works on any data structure (arrays, linked lists)

## Disadvantages
- ❌ Slow for large datasets
- ❌ Doesn't take advantage of sorted data

## When to Use
- Small datasets (< 100 elements)
- Unsorted data
- Searching linked lists
- One-time searches
- When simplicity is priority

## Comparison Table
| Feature | Linear Search | Binary Search |
|---------|---------------|---------------|
| Sorted Data Required | No | Yes |
| Time Complexity | O(n) | O(log n) |
| Implementation Difficulty | Very Simple | Moderate |
| Best Case | O(1) | O(1) |
| Space Complexity | O(1) | O(1) iterative |

## Real-World Applications
- Finding item in shopping cart
- Checking if user exists in small list
- Validating input against small whitelist

## Optimization
Use sentinels to eliminate boundary checks in some implementations!

## Examples
\`\`\`javascript
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Return index of found element
    }
  }
  
  return -1; // Element not found
}

// Recursive version
function linearSearchRecursive(arr, target, index = 0) {
  // Base cases
  if (index >= arr.length) return -1;
  if (arr[index] === target) return index;
  
  // Recursive case
  return linearSearchRecursive(arr, target, index + 1);
}
\`\`\`

🎮 Watch sequential search in action!`;
  }
  
  // Hash table / HashMap
  if (lowerMessage.includes('hash') && (lowerMessage.includes('table') || lowerMessage.includes('map'))) {
    return `## #️⃣ Hash Tables - O(1) Lookup Magic

## Summary
A Hash Table (or Hash Map) is a data structure that implements an associative array abstract data type, mapping keys to values using a hash function to compute an index into an array of buckets or slots.

## How It Works
### 1. Hash Function
Converts a key into an index using a hash function

### 2. Store Value
Places the value at the computed index in the underlying array

### 3. Retrieve Value
Hashes the key again to find the index where the value is stored

### 4. Handle Collisions
When two keys hash to the same index, resolve using collision resolution techniques

## Performance Analysis
### Time Complexity
- **Average Case**: O(1) - Insert, Delete, Search
- **Worst Case**: O(n) - All keys hash to same slot (poor hash function)

### Space Complexity
- **Space**: O(n) - where n is the number of key-value pairs

### Other Properties
- **Ordering**: No guaranteed order of elements
- **Duplicates**: Keys must be unique, values can be duplicated

## Collision Resolution Methods
### 1. Chaining
- Each slot contains a linked list or dynamic array
- Multiple values can share the same slot
- Simple and flexible approach

### 2. Open Addressing
- Find the next available slot when collision occurs
- **Linear Probing**: Check next slot sequentially
- **Quadratic Probing**: Check slots at quadratic intervals
- **Double Hashing**: Use a second hash function

## Advantages
- ✅ **Fast Average**: O(1) for all operations
- ✅ **Flexible Keys**: Any hashable type
- ✅ **Constant Time**: Regardless of size (average case)

## Disadvantages
- ❌ No ordering maintained
- ❌ Space overhead
- ❌ Worst case can be O(n)
- ❌ Hash function quality critical

## Good Hash Function Properties
- **Deterministic**: Same input → Same output
- **Uniform Distribution**: Minimize collisions
- **Fast to Compute**: O(1) hash computation
- **Minimize Patterns**: Avoid clustering

## When to Use
- Need fast lookup/insert/delete operations
- Key-value storage requirements
- Caching mechanisms
- Counting frequencies
- Detecting duplicates
- Implementing sets

## Real-World Applications
- Database indexing
- Caching (LRU cache)
- Symbol tables in compilers
- Browser history
- DNS resolution
- Password storage (with cryptographic hash)

## Load Factor
λ = n / m (items / slots)
- Keep λ < 0.7 for good performance
- Rehash when load factor gets high (typically double the size)

## Common Implementations
- JavaScript: Object, Map
- Python: dict
- Java: HashMap
- C++: unordered_map

## Examples
\`\`\`javascript
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  
  _hash(key) {
    let total = 0;
    const PRIME = 31;
    
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const char = key[i];
      const value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    
    return total;
  }
  
  set(key, value) {
    const index = this._hash(key);
    
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    
    // Check if key already exists
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index][i][1] = value;
        return;
      }
    }
    
    this.keyMap[index].push([key, value]);
  }
  
  get(key) {
    const index = this._hash(key);
    
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    
    return undefined;
  }
}
\`\`\`

🎮 Visualize hashing and collision resolution!`;
  }
  
  // Time Complexity
  if (lowerMessage.includes('time complexity') || lowerMessage.includes('big o')) {
    return `## 🕒 Time Complexity Analysis

## Summary
Time complexity describes how the runtime of an algorithm grows as the input size increases. It's expressed using Big O notation, which provides an upper bound on the growth rate.

## Common Complexity Classes (Best to Worst)
### O(1) - Constant Time
- Accessing array elements by index
- Hash table lookups
- Push/pop operations on stack

### O(log n) - Logarithmic Time
- Binary search
- Balanced tree operations
- Divide and conquer algorithms

### O(n) - Linear Time
- Single loop through all elements
- Linear search
- Iterating through array

### O(n log n) - Linearithmic Time
- Efficient sorting algorithms (Merge Sort, Heap Sort)
- Some divide and conquer algorithms

### O(n²) - Quadratic Time
- Nested loops
- Bubble Sort, Selection Sort
- Comparing each element with every other element

### O(2ⁿ) - Exponential Time
- Recursive Fibonacci without memoization
- Subset generation
- Brute force algorithms

## Pro Tips for Analysis
1. Always consider worst-case scenarios
2. Nested loops often indicate O(n²) complexity
3. Divide-and-conquer usually gives O(n log n) complexity
4. Dynamic Programming can reduce exponential to polynomial time
5. Look for recursive patterns and use recurrence relations

## Space Complexity
Space complexity measures how much memory an algorithm uses as input size grows.

### Common Space Complexities
- O(1): Constant space (few variables)
- O(log n): Recursion depth (binary search)
- O(n): Linear space (extra array)
- O(n²): Quadratic space (2D array)

## Examples
\`\`\`javascript
// O(1) - Constant time
function getFirstElement(arr) {
  return arr[0];
}

// O(n) - Linear time
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// O(n²) - Quadratic time
function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

// O(log n) - Logarithmic time
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
\`\`\`

🔍 Want specifics? Ask about a particular algorithm!`;
  }
  
  // BFS vs DFS
  if (lowerMessage.includes('bfs') && lowerMessage.includes('dfs')) {
    return `## 🌳 BFS vs DFS Comparison

## Summary
Breadth-First Search (BFS) and Depth-First Search (DFS) are two fundamental graph traversal algorithms that differ in their exploration strategy and use cases.

## Breadth-First Search (BFS)
### Strategy
Explores nodes level by level, visiting all neighbors of a node before moving to the next level

### Data Structure
Uses a **Queue** (FIFO - First In, First Out)

### Best For
Finding the shortest path in unweighted graphs

### Space Complexity
O(V) - can use more memory as it stores all nodes at the current level

### Guarantees
Finds the minimum distance in unweighted graphs

## Depth-First Search (DFS)
### Strategy
Goes as deep as possible along each branch before backtracking

### Data Structure
Uses a **Stack** (LIFO - Last In, First Out) or **Recursion**

### Best For
Exploring all paths, detecting cycles, and traversing trees

### Space Complexity
O(h) where h is the maximum depth - more memory efficient for deep graphs

### Guarantees
Better for "existence" problems (e.g., does a path exist?)

## Performance Comparison
| Aspect | BFS | DFS |
|--------|-----|-----|
| Strategy | Level-by-level | Deep-first |
| Data Structure | Queue | Stack/Recursion |
| Space Complexity | O(V) | O(h) |
| Shortest Path | Guaranteed (unweighted) | Not guaranteed |
| Memory Usage | Higher | Lower |
| Solution Type | Optimal (shortest) | Any valid |

## Real Applications
### BFS Applications
- Social media connections (finding friends of friends)
- GPS navigation (shortest route in unweighted graphs)
- Web crawling (breadth-first indexing)
- Broadcasting in networks
- Finding shortest path in unweighted graphs

### DFS Applications
- Maze solving
- Topological sorting
- Cycle detection in graphs
- Path finding in mazes
- Connected components in graphs
- Tree traversals (inorder, preorder, postorder)

## Examples
\`\`\`javascript
// BFS Implementation
function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  const result = [];
  
  visited.add(start);
  
  while (queue.length > 0) {
    const node = queue.shift();
    result.push(node);
    
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  
  return result;
}

// DFS Implementation (Recursive)
function dfs(graph, node, visited = new Set(), result = []) {
  visited.add(node);
  result.push(node);
  
  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited, result);
    }
  }
  
  return result;
}

// DFS Implementation (Iterative)
function dfsIterative(graph, start) {
  const visited = new Set();
  const stack = [start];
  const result = [];
  
  while (stack.length > 0) {
    const node = stack.pop();
    
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);
      
      // Add neighbors to stack (reverse order for left-to-right traversal)
      for (let i = graph[node].length - 1; i >= 0; i--) {
        stack.push(graph[node][i]);
      }
    }
  }
  
  return result;
}
\`\`\`

🚀 Try our graph visualizer to see both in action!`;
  }
  
  // More specific question matching
  if (lowerMessage.includes('how') && lowerMessage.includes('work') && (lowerMessage.includes('bfs') || lowerMessage.includes('breadth'))) {
    return `## 🚶 Breadth-First Search (BFS) - Level-by-Level Exploration

## Summary
Breadth-First Search (BFS) is a graph traversal algorithm that explores nodes level by level, visiting all neighbors of a node before moving to nodes at the next level. It's particularly useful for finding the shortest path in unweighted graphs.

## How BFS Works
### 1. Start at Root/Source
Begin with the starting node (root in trees, source in graphs)

### 2. Visit Neighbors
Visit all immediate neighbors of the current node

### 3. Move to Next Level
Move to the neighbors of the neighbors (next level)

### 4. Continue Process
Repeat until all nodes have been visited

## Data Structure Used
**Queue** (FIFO - First In, First Out)
- Ensures nodes are processed in the order they are discovered
- Maintains the level-by-level exploration property

## Algorithm Steps
### Initialization
1. Create an empty queue
2. Mark the starting node as visited
3. Enqueue the starting node

### Main Loop
1. While the queue is not empty:
   - Dequeue a node
   - Process the node (e.g., add to result)
   - For each unvisited neighbor:
     - Mark as visited
     - Enqueue the neighbor

## Applications
### Shortest Path Problems
- Finding the shortest path in unweighted graphs
- Social network degree of separation
- Web crawling with depth limits

### Tree/Graph Traversal
- Level-order traversal of trees
- Finding connected components
- Broadcasting in networks

### Other Uses
- Garbage collection algorithms
- Serialization/deserialization of trees
- Finding nodes at a given distance from source

## Performance Analysis
### Time Complexity
- **Time**: O(V + E) where V = vertices, E = edges
- **Reason**: Each vertex and edge is processed at most once

### Space Complexity
- **Space**: O(V) for the queue
- **Auxiliary**: O(V) for the visited set
- **Total**: O(V)

## Key Insight
BFS guarantees finding the shortest path in unweighted graphs because it explores all nodes at distance k before exploring nodes at distance k+1.

## Examples
\`\`\`javascript
function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  const result = [];
  
  visited.add(start);
  
  while (queue.length > 0) {
    // Dequeue the front node
    const currentNode = queue.shift();
    result.push(currentNode);
    
    // Visit all unvisited neighbors
    for (const neighbor of graph[currentNode]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor); // Enqueue neighbor
      }
    }
  }
  
  return result;
}

// BFS for finding shortest path in unweighted graph
function bfsShortestPath(graph, start, target) {
  const queue = [[start, 0]]; // [node, distance]
  const visited = new Set([start]);
  
  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    
    if (node === target) {
      return distance;
    }
    
    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }
  
  return -1; // Target not reachable
}
\`\`\`

## BFS vs Other Algorithms
| Algorithm | Strategy | Use Case | Time Complexity |
|-----------|----------|----------|-----------------|
| BFS | Level-by-level | Shortest path (unweighted) | O(V + E) |
| DFS | Deep-first | Path existence, cycle detection | O(V + E) |
| Dijkstra | Priority-based | Shortest path (weighted) | O((V + E) log V) |

🎮 Try our BFS visualizer to see level-by-level exploration!`;
  }
  
  if (lowerMessage.includes('how') && lowerMessage.includes('work') && (lowerMessage.includes('dfs') || lowerMessage.includes('depth'))) {
    return `## 🧬 Depth-First Search (DFS) - Deep Exploration

## Summary
Depth-First Search (DFS) is a graph traversal algorithm that explores as far as possible along each branch before backtracking. It's particularly useful for exploring all possible paths and detecting cycles in graphs.

## How DFS Works
### 1. Start at Root/Source
Begin with the starting node (root in trees, source in graphs)

### 2. Explore Deep
Go as deep as possible along the first branch

### 3. Backtrack
When no unvisited neighbors remain, backtrack to the previous node

### 4. Continue Process
Repeat until all nodes have been visited

## Data Structures Used
### Stack (Iterative Implementation)
- **LIFO** (Last In, First Out) structure
- Ensures deep exploration before backtracking

### Recursion (Recursive Implementation)
- Function call stack serves as the implicit stack
- Often more intuitive to implement

## Algorithm Steps (Recursive)
### Base Case
1. If current node is null or already visited, return

### Recursive Case
1. Mark current node as visited
2. Process the node (e.g., add to result)
3. For each unvisited neighbor:
   - Recursively call DFS on neighbor

## Algorithm Steps (Iterative)
### Initialization
1. Create an empty stack
2. Push the starting node to stack
3. Create a visited set

### Main Loop
1. While stack is not empty:
   - Pop a node
   - If not visited:
     - Mark as visited
     - Process it
     - Push all unvisited neighbors to stack

## Applications
### Path Finding
- Maze solving
- Finding if a path exists between two nodes
- Puzzle solving (Sudoku, N-Queens)

### Graph Analysis
- Cycle detection in directed and undirected graphs
- Topological sorting
- Strongly connected components

### Tree Operations
- Tree traversals (preorder, inorder, postorder)
- Finding connected components
- Generating mazes

## Performance Analysis
### Time Complexity
- **Time**: O(V + E) where V = vertices, E = edges
- **Reason**: Each vertex and edge is processed at most once

### Space Complexity
- **Recursive**: O(V) for the recursion stack (worst case: linear chain)
- **Iterative**: O(V) for the explicit stack
- **Auxiliary**: O(V) for the visited set
- **Total**: O(V)

## Key Insight
DFS goes deep first, which makes it excellent for exploring all possible paths and detecting cycles. It naturally lends itself to backtracking problems.

## Examples
\`\`\`javascript
// Recursive DFS Implementation
function dfsRecursive(graph, node, visited = new Set(), result = []) {
  // Mark current node as visited
  visited.add(node);
  result.push(node);
  
  // Visit all unvisited neighbors
  for (const neighbor of graph[node]) {
    if (!visited.has(neighbor)) {
      dfsRecursive(graph, neighbor, visited, result);
    }
  }
  
  return result;
}

// Iterative DFS Implementation
function dfsIterative(graph, start) {
  const visited = new Set();
  const stack = [start];
  const result = [];
  
  while (stack.length > 0) {
    // Pop the top node
    const node = stack.pop();
    
    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);
      
      // Push all unvisited neighbors (in reverse order for left-to-right traversal)
      for (let i = graph[node].length - 1; i >= 0; i--) {
        const neighbor = graph[node][i];
        if (!visited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
  
  return result;
}

// DFS for cycle detection in directed graph
function hasCycle(graph) {
  const visiting = new Set(); // Nodes being processed
  const visited = new Set();  // Nodes completely processed
  
  function dfs(node) {
    if (visiting.has(node)) return true; // Back edge found - cycle!
    if (visited.has(node)) return false; // Already processed
    
    visiting.add(node);
    
    for (const neighbor of graph[node]) {
      if (dfs(neighbor)) return true;
    }
    
    visiting.delete(node);
    visited.add(node);
    return false;
  }
  
  // Check all nodes (in case of disconnected components)
  for (const node in graph) {
    if (!visited.has(node) && dfs(node)) {
      return true;
    }
  }
  
  return false;
}
\`\`\`

## DFS vs Other Algorithms
| Algorithm | Strategy | Use Case | Time Complexity |
|-----------|----------|----------|-----------------|
| DFS | Deep-first | Path existence, cycle detection | O(V + E) |
| BFS | Level-by-level | Shortest path (unweighted) | O(V + E) |
| Dijkstra | Priority-based | Shortest path (weighted) | O((V + E) log V) |

🎮 Try our DFS visualizer to see deep exploration!`;
  }
  
  // Quick Sort
  if (lowerMessage.includes('quick sort') || lowerMessage.includes('quicksort')) {
    return `## ⚡ Quick Sort - The Speed Demon!

## Summary
Quick Sort is a highly efficient, comparison-based sorting algorithm that uses a divide-and-conquer approach. It works by selecting a 'pivot' element and partitioning the array around the pivot, then recursively sorting the subarrays.

## How It Works
### 1. Choose a Pivot
Select an element from the array to serve as the pivot (various strategies possible)

### 2. Partition
Rearrange the array so that:
- Elements less than the pivot come before it
- Elements greater than the pivot come after it
- The pivot is in its final sorted position

### 3. Recursively Sort Subarrays
Apply the same process to the subarray of elements less than the pivot and the subarray of elements greater than the pivot

### 4. No Merge Needed
Unlike Merge Sort, Quick Sort sorts in place, so no merging step is required

## Performance Analysis
### Time Complexity
- **Best/Average Case**: O(n log n) - Good pivot choices lead to balanced partitions
- **Worst Case**: O(n²) - Poor pivot choices (e.g., always picking min/max)
- **Reason**: Depth of recursion tree depends on pivot quality

### Space Complexity
- **Space**: O(log n) - Recursion stack depth for balanced partitions
- **Worst Case**: O(n) - For highly unbalanced partitions

### Other Properties
- **Stable**: No - relative order of equal elements may change
- **In-Place**: Yes - sorts within the original array
- **Adaptive**: No - doesn't perform better on partially sorted data

## Why It's Amazing
- ✅ In-place sorting (minimal extra memory)
- ✅ Cache-friendly due to good locality of reference
- ✅ Used in most standard libraries (C qsort, C++ std::sort)
- ✅ Parallelizable (different subarrays can be sorted independently)
- ✅ Fast average case performance

## Optimization Tricks
### Random Pivot Selection
Choose pivot randomly to avoid worst-case on sorted/reverse-sorted data

### 3-Way Partitioning
Handle duplicate elements efficiently by partitioning into three groups:
- Less than pivot
- Equal to pivot
- Greater than pivot

### Hybrid Approach
Switch to insertion sort for small arrays (typically < 10 elements)

### Tail Recursion Optimization
Optimize the recursive calls to reduce stack space

## Examples
\`\`\`javascript
function quickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Partition the array and get pivot index
    const pivotIndex = partition(arr, low, high);
    
    // Recursively sort elements before and after partition
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
  
  return arr;
}

function partition(arr, low, high) {
  // Choose rightmost element as pivot
  const pivot = arr[high];
  let i = low - 1; // Index of smaller element
  
  for (let j = low; j < high; j++) {
    // If current element is smaller than or equal to pivot
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
    }
  }
  
  // Place pivot in correct position
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1; // Return pivot index
}

// Randomized Quick Sort
function randomizedQuickSort(arr, low = 0, high = arr.length - 1) {
  if (low < high) {
    // Randomly choose pivot and swap with last element
    const randomIndex = Math.floor(Math.random() * (high - low + 1)) + low;
    [arr[randomIndex], arr[high]] = [arr[high], arr[randomIndex]];
    
    const pivotIndex = partition(arr, low, high);
    randomizedQuickSort(arr, low, pivotIndex - 1);
    randomizedQuickSort(arr, pivotIndex + 1, high);
  }
  
  return arr;
}
\`\`\`

## Quick Sort vs Other Algorithms
| Algorithm | Time (Average) | Time (Worst) | Space | Stable |
|-----------|----------------|--------------|-------|--------|
| Quick Sort | O(n log n) | O(n²) | O(log n) | No |
| Merge Sort | O(n log n) | O(n log n) | O(n) | Yes |
| Heap Sort | O(n log n) | O(n log n) | O(1) | No |

🎮 See it in action with our visualizer!`;
  }

  // Dynamic Programming
  if (lowerMessage.includes('dynamic programming') || lowerMessage.includes(' dp ') || lowerMessage.includes('when') && lowerMessage.includes('dp')) {
    return `## 🧠 Dynamic Programming Guide

## Summary
Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler subproblems, solving each subproblem just once, and storing their solutions to avoid redundant computations.

## When to Use DP
### Optimal Substructure
The optimal solution contains optimal solutions to subproblems

### Overlapping Subproblems
The same subproblems are solved multiple times

### Optimization Problems
Finding maximum, minimum, or counting solutions

## Two Main Approaches
### Memoization (Top-Down)
1. Start with the original problem
2. Break into subproblems recursively
3. Cache results to avoid recomputation
4. More intuitive and closer to natural problem-solving

### Tabulation (Bottom-Up)
1. Start with the smallest subproblems
2. Build up solutions to larger problems
3. Fill a table systematically
4. More space-efficient in some cases

## Classic Problems and Solutions
### Fibonacci Sequence
\`\`\`javascript
// Naive recursive - O(2^n)
function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// Memoization - O(n)
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

// Tabulation - O(n)
function fibTab(n) {
  if (n <= 1) return n;
  
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  
  return dp[n];
}
\`\`\`

### 0/1 Knapsack Problem
\`\`\`javascript
function knapsack(weights, values, capacity) {
  const n = weights.length;
  // dp[i][w] = maximum value with first i items and weight limit w
  const dp = Array(n + 1).fill(null).map(() => Array(capacity + 1).fill(0));
  
  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      // Don't take item i-1
      dp[i][w] = dp[i - 1][w];
      
      // Take item i-1 if it fits
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      }
    }
  }
  
  return dp[n][capacity];
}
\`\`\`

### Longest Common Subsequence (LCS)
\`\`\`javascript
function lcs(str1, str2) {
  const m = str1.length;
  const n = str2.length;
  
  // dp[i][j] = length of LCS of str1[0..i-1] and str2[0..j-1]
  const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
  
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  
  return dp[m][n];
}
\`\`\`

### Coin Change (Minimum Coins)
\`\`\`javascript
function coinChange(coins, amount) {
  // dp[i] = minimum coins needed for amount i
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0; // 0 coins needed for amount 0
  
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  }
  
  return dp[amount] === Infinity ? -1 : dp[amount];
}
\`\`\`

## Problem-Solving Steps
### 1. Identify Optimal Substructure
Determine how the optimal solution relates to optimal solutions of subproblems

### 2. Define Recurrence Relation
Express the solution in terms of solutions to smaller subproblems

### 3. Choose Approach
Decide between memoization (top-down) or tabulation (bottom-up)

### 4. Implement Solution
Write the code with proper base cases and recursive/memoized relations

### 5. Optimize Space
If possible, reduce space complexity by using only necessary previous states

## Key Concepts
### State
A set of parameters that uniquely identifies a subproblem

### Transition
How to move from one state to another (the recurrence relation)

### Base Case
The simplest subproblems that can be solved directly

### Memoization
Storing computed results to avoid redundant calculations

## Examples of DP Patterns
### Linear DP
Problems where state depends on previous states in a linear fashion
- Fibonacci, House Robber, Climbing Stairs

### Grid DP
Problems on 2D grids where you move in specific directions
- Unique Paths, Minimum Path Sum

### Interval DP
Problems where you solve for ranges or intervals
- Matrix Chain Multiplication, Burst Balloons

### Tree DP
Problems on tree structures where you compute values for subtrees
- Diameter of Tree, Maximum Path Sum in Binary Tree

## Common Mistakes
1. Not identifying overlapping subproblems
2. Incorrect recurrence relation
3. Forgetting base cases
4. Inefficient space usage
5. Not considering all possible transitions

🚀 Try our DP visualizer to see subproblems build up!`;
  }

  // Default response for unmatched queries
  const intelligentResponses = [
    `## 🤔 Interesting Question!

## Summary
I'd love to help you with your question about algorithms and data structures!

## How I Can Assist
To give you the best answer, please provide more details about what you're looking for:

### What I Can Help With
- **Algorithm Explanations**: Detailed breakdowns of how algorithms work
- **Code Implementation**: Examples in various programming languages
- **Complexity Analysis**: Time and space complexity explanations
- **Problem Solving**: Strategies for tackling coding challenges
- **Comparisons**: Differences between similar concepts
- **Interview Preparation**: Common questions and approaches

### For Better Assistance
1. **Be Specific**: Instead of "tell me about sorting," try "explain why quick sort has O(n²) worst case"
2. **Mention Context**: What problem are you trying to solve?
3. **Preferred Language**: If you want code examples, let me know your preferred programming language
4. **Current Understanding**: What do you already know about the topic?

## Popular Topics
- Sorting algorithms (Quick Sort, Merge Sort, Heap Sort)
- Searching algorithms (Binary Search, Linear Search)
- Graph algorithms (BFS, DFS, Dijkstra's)
- Tree algorithms (BST, AVL, Heap, Trie)
- Dynamic Programming techniques
- Data structures (Stack, Queue, Hash Table)
- Complexity analysis (Big O notation)

## Examples of Good Questions
- "Explain how binary search works with examples"
- "Compare merge sort and quick sort in terms of performance"
- "When should I use a hash table vs a binary search tree?"
- "Help me understand the time complexity of recursive algorithms"
- "Show me how to implement a priority queue in Python"

## Interactive Learning
- Use our visualizers to see algorithms in action
- Try our coding challenges to practice
- Explore our interactive examples

What specific topic would you like to learn about?`,
    
    `## 🎯 Great Topic!

## Summary
I can provide detailed explanations about algorithms and data structures! Let me guide you to the information you need.

## How to Get the Best Help
### For Concept Explanations
Ask: "Explain [algorithm/concept]"
Example: "Explain breadth-first search"

### For Comparisons
Ask: "Compare X vs Y"
Example: "Compare stack vs queue"

### For Implementation Help
Ask for code examples and specify your preferred programming language
Example: "Show me how to implement merge sort in Python"

### For Problem Solving
Describe your specific scenario or problem
Example: "How can I find the shortest path in an unweighted graph?"

## Available Topics
### Sorting Algorithms
- Quick Sort, Merge Sort, Heap Sort
- Bubble Sort, Insertion Sort, Selection Sort

### Searching Algorithms
- Binary Search, Linear Search
- Pattern matching algorithms

### Graph Algorithms
- BFS, DFS, Dijkstra's Algorithm
- Minimum Spanning Tree, Topological Sort

### Tree Algorithms
- Binary Search Trees, AVL Trees
- Heaps, Tries

### Dynamic Programming
- Memoization vs Tabulation
- Classic problems and patterns

### Data Structures
- Arrays, Linked Lists
- Stacks, Queues
- Hash Tables, Sets

## Learning Approach
### Step 1: Concept Understanding
I'll explain how it works with clear examples

### Step 2: Implementation
I'll show you code examples with detailed comments

### Step 3: Analysis
I'll break down time and space complexity

### Step 4: Applications
I'll share real-world use cases and when to apply the concept

## Pro Tips
1. **Be Specific**: "Explain merge sort" is better than "Explain sorting"
2. **Ask for Examples**: "Show me with an example" helps solidify understanding
3. **Request Code**: "Show me in JavaScript" for language-specific help
4. **Ask for Visuals**: "How would this look visually?" for conceptual understanding

What would you like to explore in detail?`,
    
    `## 🚀 Excellent Question!

## Summary
I'm here to help you master algorithms and data structures through systematic explanations and practical examples.

## Learning Path Structure
### 1. Concept Introduction
- Clear definition and purpose
- Real-world applications
- When to use this approach

### 2. How It Works
- Step-by-step breakdown
- Visual representation
- Key insights and intuition

### 3. Implementation
- Code examples in popular languages
- Explanation of key components
- Common variations and optimizations

### 4. Analysis
- Time and space complexity
- Best, average, and worst cases
- Trade-offs and limitations

### 5. Applications
- Real-world use cases
- Similar algorithms for comparison
- When to choose this over alternatives

## For Technical Questions
### Algorithm Explanations
Ask: "How does [algorithm] work?"
Example: "How does Dijkstra's algorithm find the shortest path?"

### Code Implementation
Ask: "Show me how to implement [data structure/algorithm]"
Example: "Show me how to implement a binary search tree in Java"

### Complexity Analysis
Ask: "What is the time complexity of [algorithm]?"
Example: "What is the time complexity of quick sort in the worst case?"

### Problem Solving
Ask: "How would I solve [type of problem]?"
Example: "How would I find the longest increasing subsequence?"

## For Conceptual Questions
### Comparisons
Ask: "What's the difference between [X] and [Y]?"
Example: "What's the difference between a stack and a queue?"

### When to Use
Ask: "When should I use [data structure/algorithm]?"
Example: "When should I use a hash table instead of a binary search tree?"

### Best Practices
Ask: "What are the best practices for [topic]?"
Example: "What are the best practices for implementing recursive algorithms?"

## Interactive Learning Features
### Visualizations
- Step-by-step algorithm execution
- Data structure operations
- Complexity comparisons

### Practice Problems
- Guided coding challenges
- Interview-style questions
- Performance optimization tasks

### Code Examples
- Multiple programming languages
- Well-commented implementations
- Common variations and optimizations

## Current Platform Features
- Algorithm visualizers for hands-on learning
- Interactive coding environments
- Progress tracking and learning paths
- Community discussions and solutions

What specific aspect of algorithms or data structures would you like to explore?`
  ];

  const randomResponse = intelligentResponses[Math.floor(Math.random() * intelligentResponses.length)];
  return randomResponse;
}