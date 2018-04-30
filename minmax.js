function myArray(arr) {
  var len = arr.length;
  var max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max=arr[len];
    }
  }
  return max;
}
console.log(myArray([322,13,1,3]))
