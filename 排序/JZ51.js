let arr = [364, 637, 341, 406, 747, 995, 234, 971, 571, 219, 993, 407, 416, 366, 315, 301, 601, 650, 418, 355, 460, 505, 360, 965, 516, 648, 727, 667, 465, 849, 455, 181, 486, 149, 588, 233, 144, 174, 557, 67, 746, 550, 474, 162, 268, 142, 463, 221, 882, 576, 604, 739, 288, 569, 256, 936, 275, 401, 497, 82, 935, 983, 583, 523, 697, 478, 147, 795, 380, 973, 958, 115, 773, 870, 259, 655, 446, 863, 735, 784, 3, 671, 433, 630, 425, 930, 64, 266, 235, 187, 284, 665, 874, 80, 45, 848, 38, 811, 267, 575]


function InversePairs(data) {
  function mergeSort(arr) {
    if (arr.length < 2) {
      return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid)
    let right = arr.slice(mid)
    return merge(mergeSort(left), mergeSort(right))
  }

  function merge(left, right) {
    let temp = []
    while (left.length && right.length) {
      if (left[0] <= right[0]) {
        temp.push(left.shift())
      } else {
        temp.push(right.shift())
        count += left.length
      }
    }
    while (left.length) {
      temp.push(left.shift())
    }
    while (right.length) {
      temp.push(right.shift())
    }
    return temp
  }

  let count = 0
  mergeSort(data)
  return count % 1000000007
}

console.log(InversePairs(arr))