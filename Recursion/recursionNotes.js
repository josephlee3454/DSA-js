// recursion 
// what is recursion?
//         process that calls itself in our case a function that calls itself 
// why use Recursion ?
//         * its everywhere all the time 
//         * json.parse/ json.stringfy
//         * document.getElementById and Dom Traversal Algos
//         * object traversal 
//         we will see it with more complex data structures 
//         sometimes can be a cleaner alternative to recursion 
// Why do i care about recurssion ? 
//         * youre used to functions being pushed on the call stacl and popped off when done 
///        * when we write recurssive functions , we keep pushing new functions onto the call stack !
// base case ?
//         * the condition when the reursion stops 

// Recursive Version
function countDown(num){
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
// console.log(countDown(3));


// Iterative Version
function countDown(num){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("All done!")
}

// second recursive function 
function sumRange(num){
    if(num === 1) return 1; 
    console.log(num + sumRange(num-1));
    return num + sumRange(num-1);
 }
 
//  console.log(sumRange(4));
 

 /// iterative factorial 
//  function factorial(num){
//     let total = 1; 
//     for(let i = num; i > 1; i-- ){
//         total+=1
//     }
//     return total;
//  }

//  console.log(factorial(4));


 // recursive factorial 
 function factorial(num){
    if(num === 1) return 1; 
    return num * factorial(num-1);
 }
console.log(factorial(5))


// where things go wrong 
// * no base case or base case is wrong 


// recreate math.power with recursion 
let num1;
let num2;
function power(num1, num2){
    if(num2 === 0)return 1;
    return num1 * power(num1, num2-1)
}

// recreate factorial with recursion 

function factorial(num){
    if(num === 0) return 1;
    return num * factorial(num-1);
}

// recreate product of array with recursion
function productOfArray(arr){
    if(arr.length === 0){
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

// recreate recursive range function 
function recursiveRange(num){
    if (num === 1){
        return 1
    }
    return num + recursiveRange(num-1)
}

// recreate a recursive fibonacci 
function fib(num){
    if (num <= 2) return 1;
    return fib(num -1) + fib(num -2);
}

// bonus challenge Recursion 
//
function reverseString(str){
    if(str === "" ){
        return "";
    }
    return reverseString(str.substr(1)) + str.charAt(0);
}


console.log(reverseString("hello"))


/// recursion is palindrome

function isPalindromeHelper( str , start , end) {

    if (start === end) return true;

    if ((str.charAt(start)) != (str.charAt(end))) return false;


    if (start < end + 1) {
        return isPalindromeHelper(str, start + 1, end - 1);
    }

    return true;
}

function isPalindrome(str) {
    let strLen = str.length;

    if (strLen === 0) return true;

    return isPalindromeHelper(str, 0, strLen - 1);
}


// recussive function flatten 3d arrays 

function flatten(arr1){
    let arr2 = []
        for(let i = 0; i < arr1.length; i++){
          if(Array.isArray(arr1[i])){
                arr2 = arr2.concat(flatten(arr1[i]))
          } else {
                arr2.push(arr1[i])
          }
    } 
    return arr2;
  }

// recursive capitlize first 


function capitalizeFirst (arr) {
    if (arr.length === 1) {
      return [arr[0][0].toUpperCase() + arr[0].substr(1)];
    }
    let result = capitalizeFirst(arr.slice(0, -1));
    let string = arr.slice(arr.length - 1)[0][0].toUpperCase() + arr.slice(arr.length-1)[0].substr(1);
    result.push(string);
    return result;
  }