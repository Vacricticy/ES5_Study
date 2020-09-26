/* instanceof与typeof的区别：

instanceof适用于判断基本数据类型，instanceof适用于判断引用数据类型
instanceof用于判断一个‘对象’是否是另一个构造函数的实例。instanceof右边必须是构造函数的名称。instanceof返回的值是布尔类型的。
typeof用于返回变量所属的数据类型,返回的值包括number,string,boolean,undefined,object,function。
typeof对于丰富的对象实例，只能返回object 

*/

// function Father() {}
// var person = new Father();
// console.log(person instanceof Father); //true

// console.log({} instanceof Object); //true
// console.log(typeof { name: "liuxiaokang" }); //object

// console.log([] instanceof Array); //true
// console.log(typeof [1, 2]); //object

// console.log("" instanceof String); //false
// console.log("aaa" instanceof String); //false

// console.log(typeof new Date("2020-07-01")); //object
// console.log(typeof "2020-07-01"); //string

function Person() {
  this.name = "liuxiaokang";
}
var a = [34, 4, 3, 54],
  a2 = {},
  a3 = null;
var a4 = new Person();
var b = 34,
  c = "adsfas",
  d = function () {
    console.log("我是函数");
  },
  e = true,
  g;

console.log(typeof a); //object
console.log(typeof a2); //object
console.log(typeof a3); //obejct
console.log(typeof a4); //object

console.log(typeof b); //number
console.log(typeof c); //string
console.log(typeof d); //function
console.log(typeof e); //boolean
console.log(typeof g); //undefined

function Man() {}
let man = new Man();
man.__proto__ = null;
console.log(man instanceof Man); //false

console.log([] instanceof Array); //true
console.log([] instanceof Object); //true

function my_instanceof(object, fnName) {
  let prototype = object.__proto__;
  while (prototype) {
    if (fnName.prototype === prototype) {
      return true;
    } else {
      prototype = prototype.__proto__;
    }
  }
  return false;
}
console.log(my_instanceof([], Array)); //true
console.log(my_instanceof([], Object)); //true
console.log(my_instanceof({}, Array)); //false
