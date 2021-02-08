// Task1

// const data = [1, 2, 1, 2, 3];

// const unique = (data) => {
//     return data.filter((element, index, array) => {
//         return array.indexOf(element) === index;
//     })
// }

// console.log(unique(data));

// Task2

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 2, 3, 4];
// const arr3 = [1, 2, 3, 5];
// const arr4 = [1, 2, 3, 4, 5];

// const isEqual = (firstArray, secondArray) => {
//     return (firstArray.length !== secondArray.length) ? false : compareArrays(firstArray, secondArray);
// }

// const compareArrays = (firstArray, secondArray) => {
//     let result = true;
//     firstArray.forEach((value, index) => {
//         if(value !== secondArray[index]) {
//             result = false;
//             return;
//         } 
//     });
//     return result;
// }

// console.log(isEqual(arr1, arr3));

// Task3

const data = [1, 2, 3];

const reverse = (array) => {
    let resultData = [];
    for(let index = array.length - 1; index >= 0; index--) {
        resultData.push(array[index])
    }
    return resultData;
}

console.log(reverse(data))