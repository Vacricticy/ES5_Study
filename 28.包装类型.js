// 6种基本数据类型：string,number,boolean,null,undefined,Symbol

// 1.  3种原始类型的值:（注意：这里是值，与上面并不冲突）
// 数值，字符串，布尔值

// 2.包装类型，指的是与数值、字符串、布尔值分别相对应的Number、String、Boolean三个原生对象。这三个原生对象可以把原始类型的值变成（包装成）对象，此时的对象就是包装对象。

// 3.这三个原生对象作为构造函数使用时，可以将原始类型的值转为对象.
var v1 = new Number(123);
var v2 = new String("123");
var v3 = new Boolean(true);
console.log(typeof v1, typeof v2, typeof v3); //object object object
console.log(v1 === 123, v2 === "123", v3 === true); //false false false
// 4.包装对象的设计目的：首先是使得“对象”这种类型可以覆盖 JavaScript 所有的值，整门语言有一个通用的数据模型，其次是使得原始类型的值也有办法调用自己的方法。

// 5.这三个原生对象作为普通函数使用时，可以将任意类型的值转换为原始类型的值
// 字符串转为数值
Number("123"); // 123

// 数值转为字符串
String(123); // "123"

// 数值转为布尔值
Boolean(123); // true

// 6.原始类型的值与包装对象的自动转换
// 某些场合，原始类型的值会自动当作包装对象调用，即调用包装对象的属性和方法。这时，JavaScript 引擎会自动将原始类型的值转为包装对象实例，并在使用后立刻销毁实例。
"abc".length; // 3
// 上面代码中，abc是一个字符串，本身不是对象，不能调用length属性。JavaScript 引擎自动将其转为包装对象，在这个对象上调用length属性。调用结束后，这个临时对象就会被销毁。这就叫原始类型与实例对象的自动转换。

// parseInt与Number的区别：
console.log(Number("12")); //12
console.log(Number("12nnn")); //NaN
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN

console.log(["1", "2", "110"].map(parseInt)); //[1,NaN,6]
console.log(parseInt("12nm")); //12
console.log(parseInt("0x12")); //18
console.log(parseInt("012")); //12
