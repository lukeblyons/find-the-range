// Starting array
let numsArray = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:

let smallest = 0
let largest = 0

for(let i = 0; i < numsArray.length; i++){
    if(smallest > numsArray[i]){
        smallest = numsArray[i]
    } else if(largest < numsArray[i]){
        largest = numsArray[i]
    }
}

console.log(smallest);
console.log(largest);
