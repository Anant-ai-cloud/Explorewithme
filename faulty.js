// + --> -
// * --> +
// - --> /
// / --> **
// it perfoorms wrong operation 10% of the times
let a = 8;
let b = 5;
let c = a / b;
let A = Math.random();
if(A < 0.1){
if(c == a+b){
    console.log(a - b);
}
else if(c == a*b ){
    console.log(a + b);
}
else if( c == a-b ){
    console.log(a/b);
}
else if(c == a/b){
    console.log(a ** b);
}
}
else{
    console.log("The solution is ", c);
}