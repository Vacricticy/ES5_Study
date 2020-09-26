// 1.先判断是否为null, (需要使用严格比较运算符, 因为undefined == null)
// 2.然后通过typeof判断出其他的基本数据类型,若为number还需进一步判断是否为NaN，注意：function的检测直接可以在typeof的判断中进行
// 3.对于是obejct的数据在判断的时候需要先判断是否为Obejct，再进一步判断是数组，还是日期，如果都不是，那就是对象
// 总的来说分为3段：null,"非object"和object
function getType(a) {
  if (a === null) {
    console.log("空值");
    return;
  }
  let state = typeof a;

  if (state != "object") {
    switch (state) {
      case "string":
        console.log("字符串");
        break;
      case "number":
        if (isNaN(a)) {
          console.log("NaN");
        } else {
          console.log("数字");
        }
        break;
      case "boolean":
        console.log("布尔值");
        break;
      case "undefined":
        console.log("未赋值变量");
        break;
      case "function":
        console.log("函数");
    }
  } else {
    if (a instanceof Object) {
      if (a instanceof Array) {
        console.log("数组");
      } else if (a instanceof Date) {
        console.log("时间");
      } else {
        console.log("对象");
      }
    }
  }
}
getType("sss"); //字符串
getType(21312); //数字
getType(true); //布尔值
getType(null); //空值
let m;
getType(m); //未赋值变量
getType([]); //数组
getType({}); //对象
getType(new Date()); //时间
getType(function () {}); //函数
getType(NaN); //NaN
