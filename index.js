//faulty calculator
let random = Math.random();
console.log(random);

let a = prompt("Enter first number");
let b = prompt("Enter operation");
let c = prompt("Enter second number");
// This means when you pass +, -, as a key (e.g., obj["+"]), JavaScript automatically converts it to a string and retrieves the value.
let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "*",
}
if(random > 0.1){
    //perform correct calculation
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);

}else{
     b = obj[b];
     alert(`The result is ${eval(`${a} ${b} ${c}`)}`);

   }