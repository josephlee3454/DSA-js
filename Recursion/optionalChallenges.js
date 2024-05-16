/// frequency counter 
function sameFrequency(num1 , num2){

    let stringObj = {};
    let stringNum1 = num1.toString();
    let stringNum2 = num2.toString();
    
    console.log(stringNum1);
    
    if(stringNum1.length !== stringNum2.length){
        return false;
    }
    
    for(let i = 0;  i < stringNum1.length; i++){
        if(!stringObj[stringNum1[i]]){
            stringObj[stringNum1[i]] = 0;
        }
        stringObj[stringNum1[i]]++;
    }
    
    for(let j = 0; j < stringNum2.length; j++){
        if(!stringObj[stringNum2[j]]){
            console.log("false not in hash table")
            return false;
        }
        stringObj[stringNum2[j]]--;
    }
    console.log("false")
    return true;
  }
  
  sameFrequency(234, 432)


  //  are there duplicates 
  