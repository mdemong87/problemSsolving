// You are given three integers a
// , b
// , and c
// . Determine if one of them is the sum of the other two.

// Input
// The first line contains a single integer t
//  (1≤t≤9261
// ) — the number of test cases.

// The description of each test case consists of three integers a
// , b
// , c
//  (0≤a,b,c≤20
// ).

// Output
// For each test case, output "YES" if one of the numbers is the sum of the other two, and "NO" otherwise.

// You can output the answer in any case (for example, the strings "yEs", "yes", "Yes" and "YES" will be recognized as a positive answer).





var one=7;
var two=15;
var three=8;

function sum (){
if(one == (two + three)){
console.log("yes");
}else if(two == (one + three)){
console.log("yes");
}else if(three == (one + two)){
console.log("yes");
}else{
    console.log("no");
}

}



sum();