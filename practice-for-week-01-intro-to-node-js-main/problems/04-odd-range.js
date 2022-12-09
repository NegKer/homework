/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
*******************************************************************************/

function oddRange(end) {
 let res = [];
for (let i = 1; i <= end; i += 2){
  // if(i % 2!== 0){
    res.push(i);
  // }
}
return res;
}





console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6)); // => [ 1, 3, 5 ]

/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = oddRange;
