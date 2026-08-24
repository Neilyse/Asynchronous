const { reject } = require("async");

const many = Array.from({length:3},(value,index)=>{
return index});
console.log(many);
function spinClockwise(digit){
    if (digit === 1 || digit <1){
        return "error"
    }
    else{
         let total = digit*digit;
         const numbers = Array.from({length:total},(value,index)=>{
                return index +1 });

                return numbers;
    
    }
    
     
    let top = numbers.Array.from({length:digit},(value,index)=>{ return index})
    return top ;
    let buttom=
    let right= ;
    let left= ;
   

} console.log(spinClockwise(5));




// multiplicatin table
function multiplicationtable(num){
    let result=[]
    let top = Array.from({length:num},(value,index)=>{
        return index + 1;

    })
    let left=  Array.from({length:num},(value,index)=>{
        return index * 2;

    })
    let right 
     return 
    
}
console.log(multiplicationtable(3));

function multiplicationtable(num){
    let results=[];
    return new Promise((resolve,reject) =>{
        let numbers= [1,2,3,4,5,6,7,8,9]
        if (numbers.includes(num) === true){
            resolve(Array.from({length:num},(value,index)=>{
                index * 1
            }))
        }
        else{
            reject('We are not on that level')
        }
    })
}
multiplicationtable(3).then((result1)=>{
    console.log(result1)
    return result1 ;
}). then((result2)=>{
    console.log(result2)
    return result1 *2
}).then((result3)=>{
    console.log(result3)
    return result1 *3
}).then((result4)=>{
    console.log(result4)
    return result1 *4
}).then((result5)=>{
    console.log(result5)
    return result1 *5
}).then((result6)=>{
    console.log(result6)
    return result1 *6
}).then((result7)=>{
    console.log(result7)
    return result1 *7
}).then((result8)=>{
    console.log(result8)
    return result1 *8
}).then((result9)=>{
    console.log(result9)
    return result1 *9
}).catch((error)=>{
    console.log(error)
});



// new approach
function multiplicationTable(num) {

    let results = [];

    for (let rowNumber = 1; rowNumber <= num; rowNumber++) {

        let row = [];

        for (let columnNumber = 1; columnNumber <= num; columnNumber++) {

              row.push( rowNumber* columnNumber)
             
             

        }

      return 
      results.push(row)   
       
    }

    return results
}
console.log(multiplicationTable(3));




function multiplicationTable(num) { 

    let results = []; 

    for (let rowNumber = 1; rowNumber <= num; rowNumber++) { 

        let row = []; 

        for (let columnNumber = 1; columnNumber <= num; columnNumber++) { 

            row.push(rowNumber+1 * columnNumber+1);
        } 

        results.push(row);
    } 

    return results;
}

console.log(multiplicationTable(3));



