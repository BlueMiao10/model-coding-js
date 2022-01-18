const arr = [45, 65, 16, 15, 48, 56, 18, 47, 24, 35]

/*
* 选择排序:在第一轮循环时，首先选定第一个元素作为最小值，将他的下标index作为最小值的下标。min = 1
* 将其与第二项元素比较，如果第二项元素值比第一项小，则将第二项元素的下标作为最小值 min = 2  依次递推
* 最后将第一项元素，与当前min所对应的元素进行位置互换
* 然后进行第二轮循环....
* 由于在比较时，最后才发生移动。所以j是从i+1开始的
*
* 时间复杂度:最坏的情况 O(n2)   最好情况 O(n2)    空间复杂度:交换变量是用到的中间变量所占的空间  O(1)
* */

for (let i = 0; i < arr.length - 1; i++) {
  let min = i
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[min] > arr[j]) {
      min = j
    }
  }
  [arr[i], arr[min]] = [arr[min], arr[i]]
}

console.log(arr)