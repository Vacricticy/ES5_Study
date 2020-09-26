function getType(value) {
  let toString = Object.prototype.toString;
  let str = toString.call(value);
  let type = str.substring(8, str.length - 1);
  //   console.log(value);
  // 这里需要额外判断NaN,注意：不能使用isNaN,因为存在Number转换
  if (Number.isNaN(value)) {
    console.log("NaN");
    return;
  } else {
    console.log(type);
  }
}
getType("sss"); //String
getType(21312); //Number
getType(true); //Boolean
getType(null); //Null
let m;
getType(m); //Undefined
getType([]); //Array
getType({}); //Object
getType(new Date()); //Date
getType(function () {}); //Function
getType(NaN); //NaN
