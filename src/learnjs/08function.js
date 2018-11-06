// function log() {
//     console.log("this is called by log fuction")
// }
// debugger
// log();

// 函数声明
function sum(pam1, pam2) {
    console.log(pam1 + pam2);
}
sum(1,3);
// 2> 函数表达式
var add = function (){
    console.log(1+3);
}
add()

// 3> 使用Function 构造函数声明
var add2 = new Function(`console.log(1+3)`)
add2()