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
   





// multiplicatin table




function multiplicationTable(num) { 

    let results = []; 

    for (let rowNumber = 1; rowNumber <= num; rowNumber++) { 

        let row = []; 

        for (let columnNumber = 1; columnNumber <= num; columnNumber++) { 

            row.push(rowNumber * columnNumber);
        } 

        results.push(row);
    } 

    return results;
}

console.log(multiplicationTable(3));



