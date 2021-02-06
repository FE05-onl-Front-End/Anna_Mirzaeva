// let arrSize = 3;
// let valueToFill = 'a';

// let fill = (arrSize, valueToFill) => {
//     return Array(arrSize).fill(valueToFill)
// };

// console.log(fill(arrSize, valueToFill));




let data = [0, 1, false, 2, undefined, '', 3, null];

let compact = arr => {
    arr = arr.filter(element => !!element)
    return arr;
}

console.log(compact(data))