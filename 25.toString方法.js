// toString() 方法返回一个表示该对象的字符串。

// 1.对象在被转换为字符串时，会调用toString方法，返回 "[object type]"，其中 type 是对象的类型
var o = new Object();
console.log(o.toString()); //  [object Object]
console.log({}.toString()); //[object Object]
console.log({ name: "liu" }.toString()); //[object Object]

// 但是！！！！字符串，数组，Date等对象拥有自定义的toString方法
console.log(typeof o.toString()); //string
console.log([].toString()); //""
console.log([22, 33].toString()); //"22,33"
console.log([1, 2, 3, 4, [1, 2, 3], [4, ["a", "b", "c"], 5]].toString()); //'1,2,3,4,1,2,3,4,a,b,c,5'

console.log(new Date()); //2020-09-26T09:47:15.601Z
console.log(new Date().toString()); //Sat Sep 26 2020 17:46:57 GMT+0800 (GMT+08:00)

// 2.与java相同，可以重写toString方法打印输出对象的基本信息
function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
let person = new Person("刘小康", 21, "男");
console.log(person.toString()); //[object Object]

Person.prototype.toString = function () {
  return `个人信息：  姓名：${this.name};  年龄：${this.age};  性别：${this.sex}`;
};
console.log(person.toString()); //个人信息：  姓名：刘小康;  年龄：21;  性别：男

// 3.使用Object.prototype.toString 检测数据类型:通过该方法可以实现封装一个函数用于判断变量的类型

var toString = Object.prototype.toString;

console.log(toString.call("abc")); //[object String]
console.log(toString.call(121)); //[object Number]
console.log(toString.call(undefined)); //[object Undefined]
console.log(toString.call(null)); //[object Null]
console.log(toString.call({})); //[object Object]
console.log(toString.call([])); //[object Array]
console.log(toString.call(new Date())); //[object Date]
console.log(toString.call(String)); //[object Function]
