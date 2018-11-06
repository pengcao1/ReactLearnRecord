
// var arr = ['test1',19,'man'];
// var str = arr.join("===")

// console.log(str);
// console.log("type of str = ", typeof str);

/**
 * Push/Pop
 */
// var arr = ["test001"]
// console.log("arr = ",arr);
// arr.push(5,6,7,"===",5678,"woshishei");
// console.log("after push 4 = ",arr);
// arr.pop();
// console.log("after pop = ", arr);

/**
 * shift/unshift
 */
var arr = ["test001","test002",5,5];
var arrEmpty = [];
console.log(arrEmpty.shift());
console.log(arr.shift());
console.log(arr);
console.log(arr.unshift("test009"))
console.log(arr);

console.log(arr.reverse());
console.log(arr.concat("998"));
console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));