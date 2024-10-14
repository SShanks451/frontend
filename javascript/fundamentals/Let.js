//let
var x = 10; //global variable
let y = 10; //global variable

if (1 == 1) {
  let z = 10; //block level variable
}
//console.log(z); //Error

console.log("for loop:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
//console.log(i); //Error
