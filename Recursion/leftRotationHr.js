function rotateLeft(d, arr) {
    // Write your code here
    let newArr = [];
    
    if(arr.length === 1)return arr;
    
    for(let i = d; i < arr.length; i++){
        newArr.push(arr[i]);
    }    
    for(let i = 0; i < d; i++){
        newArr.push(arr[i])
    }
    return newArr;
}