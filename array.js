let x = [4243,4,24,24,32,42,4,24,24,24,24,24,24,2,4];

let largestNumber = x[0];
for ( let i =0; i < x.length; i++){
    if (x[i] >= largestNumber){
        largestNumber = x[i];
    }
}
console.log(largestNumber);