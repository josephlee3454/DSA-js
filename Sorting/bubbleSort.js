//bubble sort 
// not really effiecent and not commmonly used 
// what is bubble sort : a sorting algo where the largest values bubble to the top

function bubbleSort(arr){
    let temp;
    for(let i = arr.length; i > 0; i --){
        for(let j = 0; j < i - 1; j++){
            if(arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
const arr = [44,1,3,6,8,2];
bubbleSort(arr);