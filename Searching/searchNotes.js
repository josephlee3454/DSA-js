
// Linear search basic example 

// Big-O Linear search 
// best case O(1)
// worst case O(n)
// average O(n)
function linearSearch(arr, val){
    for(let i= 0 ; i < arr.length; i++){
        if(arr[i] === val ) return i;
    }
    return -1
}

// Binary search is much faster form of search 
// * rather than eliminate one element at a time you 
// can elminate half of the remaining eelements at a time 
// * only works on sorted arrays 
// Divide and conquer **** 
// Time complexiety:
// worst o(logn)
// average case o(logn)
// best case o(1)

function binarySearch(arr, val){
  // add whatever parameters you deem necessary - good luck!
  let start = 0;
  let end = arr.length-1;
  let mid = Math.floor((start + end)/2)
  // ends loop if mid is eqaul to value or if start reaches or passes end
  while(arr[mid] !== val && start <= end){
      // checks if val is less than mid if it is then we make end = mid -1 because we already checked mid so we have to decrement
      if(val < arr[mid]){
          end = mid - 1;
      }
      // if val is less than mid then we make the new start = mid +1 in this case we have to increment because we checked mid already 
      else{
          start = mid +1;
      }
      // we create a new mid 
      mid = Math.floor((start + end)/2)
  }
  // if statement to check if mid is === to val after while loop 
  if(arr[mid] === val){
      return mid;
  }
  return -1;
}

// Naive String Search 

function naiveStringSearch(longString, shortString){
    let count = 0; 
    for(let i = 0; i < longString.length; i++){
        for(let j = 0; j < shortString.lenght; j++){
            if(shortString[j] !== longString[i+j]) break;
            if(j === shortString.length-1) count++;
        }
    }
    return count;

}
let x = naiveStringSearch("lorie loled", "lol")
console.log(x)