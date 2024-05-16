// Filtering Arrays 
//Filtering an Array: Write a function that takes an array of numbers
// and returns a new array containing only the even numbers.

function filteringArrays(numsArray){
  
   return numsArray.filter((numsArray) => numsArray % 2 == 0 )
}
console.log(filteringArrays([1,2,3,4,5,6,7]))

function filteringArrays2(numsArray1){
    let numsArray2 = [];
    for(let i = 0; i < numsArray1.length; i++){
        if(numsArray1[i] % 2 === 2){
            numsArray2.push(numsArray1[i])
        }
    }
    return numsArray2;
}
console.log(filteringArrays([1,2,3,4,5,6,7]))

// Mapping an Array: 
// Write a function that takes an array of
// strings and returns a new array with the lengths of each string.


function mappingArray(arr){
    let max = 0;
    let myString = ''
    arr.map((item) => {
        if(item.length > max){
            max = item.length;
            myString = item;
        }
    })
    return myString
}
console.log(mappingArray(['fegeewweewf','fwerfw','wfr','er','wew']))


function mappingArrayLongestString(arr){
    let max = 0;
    let bigString = '';
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > max){
            max = arr[i].length;
            bigString = arr[i];
        }
    }
    return bigString;
}
console.log(mappingArrayLongestString(['fegeewf','fwerfw','wfr','er','wew']));


function sumAllNumsArr(arr){

    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum;
}
console.log(sumAllNumsArr([1,2,3,4,5,6,7,8,9,10]))


function sumAllNumsArrWithReduceMethod(arr){
    let sum = arr.reduce((acc, currentValue) => {
        return acc + currentValue;
    }, 0);
    return sum;
}
console.log(sumAllNumsArrWithReduceMethod([1,2,3,4,5,6]))


// Finding an Element: Write a function that takes an array of numbers 
// and a target number, and returns true if the target number is in the array, false otherwise.


function findElement(arr , target){
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return true
        }
    }
    return false
}
console.log(findElement([1,2,3,4,5], 5));
console.log(findElement([1,2,3,4,5], 6));

//function with built in array method 
function findElementWithBuiltInFind(arr, target){
    if(arr.find((element) => element === target)){
        return true 
    }
    return false;
}

console.log(findElementWithBuiltInFind([1,2,3,4,5], 3));
console.log(findElementWithBuiltInFind([1,2,3,4,5], 8));

// Sorting an Array: Write a function
// that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
function sortArray(arr){
    return arr.sort();
}

console.log(sortArray([2,5,3,78,1,34,70,4,6]));

// Flattening an Array: Write a function that takes a nested array
//  and returns a new array that is flattened (i.e., all nested arrays are merged into a single array).

function flatteningArray(arr){
    return arr.flat(Infinity);
}
console.log(flatteningArray([1,2,[1,2,3,4],23,[4,5],5,6,[5,6,7]]))


//Finding Unique Elements: Write a function 
//that takes an array and returns a new array containing 
//only the unique elements (i.e., removing duplicates).

// function onlyUnique(value, index, array) {
//     return array.indexOf(value) === index;
//   }
  
//   // usage example:
//   var a = ['a', 1, 'a', 2, '1'];
//   var unique = a.filter(onlyUnique);
  
//   console.log(unique); // ['a', 1, 2, '1']

function findUniqueElements(){

}