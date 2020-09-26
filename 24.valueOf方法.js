// valueOf() 方法返回指定对象的原始值。返回的都是本身的数组
let a = 1;
let a2 = "aaa";
let a3 = true;
let a4 = { name: "title" };
let a5 = [1, 2, 3];
console.log(a.valueOf()); //1
console.log(a2.valueOf()); //aaa
console.log(a3.valueOf()); //true
console.log(a4.valueOf()); // { name: "title" }
console.log(a5.valueOf()); // [1, 2, 3]

// 可以自定义返回的原始值
function MyNumberType(n) {
  this.number = n;
}

MyNumberType.prototype.valueOf = function () {
  return 100;
};

var myObj = new MyNumberType(4);
console.log(myObj + 3); //103
