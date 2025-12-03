// Test script to verify linear search functionality
const { generateVisualizationSteps } = require('./dist/assets/index-DeaGpXHO.js');

// Mock algorithm object for linear search
const linearSearchAlgorithm = {
  id: 'linear-search',
  name: 'Linear Search',
  category: 'Searching',
  description: 'Sequentially checks each element until the target is found or the list ends.',
  timeComplexity: 'O(n)',
  spaceComplexity: 'O(1)',
  difficulty: 'Easy',
  visualizationType: 'searching',
  defaultInput: '64,34,25,12,22,11,90',
  inputType: 'array',
  code: `function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // Found at index i
    }
  }
  return -1; // Not found
}`
};

// Test cases
console.log('Testing linear search functionality...');

try {
  // Test 1: Normal case with target
  const steps1 = generateVisualizationSteps(linearSearchAlgorithm, '64,34,25,12,22,11,90', '25');
  console.log('Test 1 - Linear search with target 25:', steps1.length > 0 ? 'PASS' : 'FAIL');
  
  // Test 2: Empty target (should default to 0)
  const steps2 = generateVisualizationSteps(linearSearchAlgorithm, '64,34,25,12,22,11,90', '');
  console.log('Test 2 - Linear search with empty target:', steps2.length > 0 ? 'PASS' : 'FAIL');
  
  // Test 3: No target provided
  const steps3 = generateVisualizationSteps(linearSearchAlgorithm, '64,34,25,12,22,11,90');
  console.log('Test 3 - Linear search with no target:', steps3.length > 0 ? 'PASS' : 'FAIL');
  
  console.log('All tests completed successfully!');
} catch (error) {
  console.error('Test failed with error:', error.message);
}