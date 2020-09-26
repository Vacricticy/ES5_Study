// 方法1.indexOf方法,判断新数组中是否存在该元素
let arr = [11, 22, 33, 22, 44];
let newArr = [];
arr.forEach((item) => {
  if (newArr.indexOf(item) == -1) {
    newArr.push(item);
  }
});
console.log(newArr); //[ 11, 22, 33, 44 ]

// 方法2：先将数组转换为key值不重复的对象，然后遍历对象生成数组
let obj = {};
let newArr2 = [];
arr.forEach((item) => {
  if (!obj[item]) {
    obj[item] = item;
  }
});
for (key in obj) {
  newArr2.push(obj[key]);
}
console.log(newArr2); //[ 11, 22, 33, 44 ]

// 方法3：双重for循环+splice 一个元素一个元素的比较，删除重复的值
let arr5 = [11, 22, 33, 22, 44];
for (let i = 0; i < arr5.length; i++) {
  for (let j = i + 1; j < arr5.length; j++) {
    if (arr5[i] == arr5[j]) {
      arr5.splice(j, 1);
      j--;
    }
  }
}
console.log(arr5); //[ 11, 22, 33, 44 ]

// 方法4：sort排序+for循环 排序后，将后面一项与前一项进行比较
let arr6 = [11, 22, 33, 22, 44];
arr6.sort();
let newArr6 = [];
newArr6.push(arr6[0]);
for (let i = 1; i < arr6.length; i++) {
  // 如果后一项与前一项不同，则向新数组中添加元素
  if (arr6[i] != arr6[i - 1]) {
    newArr6.push(arr[i]);
  }
}
console.log(newArr6); //[ 11, 22, 22, 44 ]

// 方法5：利用filter 只返回第一次出现的值
let arr7 = [11, 22, 33, 22, 44];
let newArr7 = arr7.filter((item, index) => {
  // 只返回数组中第一次出现的该值
  return arr7.indexOf(item) == index;
});
console.log(newArr7); //[ 11, 22, 22, 44 ]

// 方法6：ES6 Set集合+Array.from()
let newArr3 = Array.from(new Set(arr)); //通过Array.from将具有iterator接口的数据结构转换为数组
console.log(newArr3); //[ 11, 22, 33, 44 ]

// 方法7：ES6 Set集合+ ...展开运算符
let newArr4 = [...new Set(arr)];
console.log(newArr4); //[ 11, 22, 33, 44 ]
