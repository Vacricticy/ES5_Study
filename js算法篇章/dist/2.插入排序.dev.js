"use strict";

// 插入排序的原理类似于玩扑克牌时摸牌后排序的行为。
// 每抓一张牌，就将这张牌与已经排好序的牌从右往左比。
// 如果这张牌大于相比较的牌，则将这张牌放在其后。
// 如果这张牌小于相比较的牌，则继续向前比较。
// 如果已经比较到了第一张牌，则将这张牌插入到最前面即可。
function insert(arr) {
  var newArr = [];
  newArr.push(arr[0]);
  console.log(newArr); // 外层循环控制每一次插入的元素

  for (var i = 1; i < arr.length; i++) {
    //   内层循环用于将插入的元素与新数组中的元素依次比较（从后往前比）
    for (var j = newArr.length - 1; j >= 0; j--) {
      // 如果插入的值较大，则插在元素后面
      // 注意：如果这里用了等于，则表示相同的值会插在后面；如果不用等于，则表示相同的值会插在前面。
      if (arr[i] > newArr[j]) {
        newArr.splice(j + 1, 0, arr[i]);
        break;
      } //   如果比较到了第一项，则插在新数组的最前面


      if (j == 0) {
        newArr.unshift(arr[i]);
      }
    }
  }

  return newArr;
}

var arr = [12, 1, 33, 4, 5, 3, 12];
var newArr = insert(arr);
console.log(newArr);