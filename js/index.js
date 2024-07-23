// Task 1

// let new_arr = []
// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 17 },
//     { name: 'Charlie', age: 20 },
//     { name: 'David', age: 15 }
// ];
// function filterAdultUsers(users) {
//     users.forEach(element => {
//         if(element.age >= 18){
//             new_arr.push(element)
//         }
//     });
//     return new_arr
// }

// console.log(filterAdultUsers(users)); // [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 20 }]

// Task 2

// function findZeroIndices(matrix) {
//     let arr = []
//     for (let i = 0; i < matrix.length; i++) {
//         for (let g = 0; g < matrix.length; g++) {
//             if(matrix[i][g] == 0){
//                 arr.push(i,g)
//             }            
//         }
//     }
//     return arr
//  }
 
//  console.log(findZeroIndices([
//      [1, 0, 3],
//      [4, 5, 0],
//      [7, 0, 9]
//  ])); 
 // Output: [[0, 1], [1, 2], [2, 1]]

//  Task 3

// function mostFrequentElement(arr) {
//     let frequencyMap = {};
//     let maxCount = 0;
//     let mostFrequent = null;

//     for (let num of arr) {
//         if (frequencyMap[num]) {
//             frequencyMap[num]++;
//         } else {
//             frequencyMap[num] = 1;
//         }

//         if (frequencyMap[num] > maxCount) {
//             maxCount = frequencyMap[num];
//             mostFrequent = num;
//         }
//     }

//     return mostFrequent;
//  }
 
//  // Test case
//  console.log(mostFrequentElement([1, 3, 3, 2, 1, 1, 4, 4, 4, 4, 5, 6, 6])); // 4

// Task 4

// function rotateMatrix(matrix) {
//     let first_arr = []
//     let second_arr = []
//     let third_arr = []
//     matrix.forEach(element => {
//         first_arr.push(element[0])
//         second_arr.push(element[1])
//         third_arr.push(element[2])
//     });
//     console.log([first_arr.reverse(), second_arr.reverse(), third_arr.reverse()])
// }

// console.log(rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ])); 
// Output: [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]

// Task 5
// function filterUniqueElements(arr) {
//     let new_arr = arr.filter(item => arr.indexOf(item) == arr.lastIndexOf(item))
//     console.log(new_arr)
//  }
 
//  console.log(filterUniqueElements([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 3, 5]



// Task 6
// function rotateArray(nums, k) {
//     k = k % nums.length; 
//     let rotatedPart = nums.splice(nums.length - k); 
//     nums.unshift(...rotatedPart); 
//     return nums;
// }

// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); 
// Output: [5, 6, 7, 1, 2, 3, 4]

