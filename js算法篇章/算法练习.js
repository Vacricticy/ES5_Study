function insert(arr) {
  let newArr = [];
  newArr.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    for (j = newArr.length - 1; j >= 0; j--) {
      if (arr[i] > newArr[j]) {
        newArr.splice(j + 1, 0, arr[i]);
        break;
      }
      if (j == 0) {
        newArr.unshift(arr[i]);
      }
    }
  }

  return newArr;
}

let arr = [12, 43, 1, 4, 67];
let newArr = insert(arr);
console.log(newArr);
