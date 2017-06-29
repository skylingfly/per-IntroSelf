// 05 归并排序
// 归并排序（Merge sort）是建立在归并操作上的一种有效的排序算法。该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。作为一种典型的分而治之思想的算法应用，归并排序的实现由两种方法：
// a.自上而下的递归（所有递归的方法都可以用迭代重写，所以就有了第 2 种方法）；
// b.自下而上的迭代；

// 然而，在 JavaScript 中这种方式不太可行，因为这个算法的递归深度对它来讲太深了。
// 说实话，我不太理解这句话。意思是 JavaScript 编译器内存太小，递归太深容易造成内存溢出吗？还望有大神能够指教。
// 和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，因为始终都是 O(nlogn) 的时间复杂度。代价是需要额外的内存空间。

// ## 算法步骤
// 1.申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列；
// 2.设定两个指针，最初位置分别为两个已经排序序列的起始位置；
// 3.比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置；
// 4.重复步骤 3 直到某一指针达到序列尾；
// 5.将另一序列剩下的所有元素直接复制到合并序列尾。

//	排序
function mergeSort(arr) {  // 采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    return result;
}

// 排序去重------1
function mergeSortO(arr) {  // 采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return mergeO(mergeSortO(left), mergeSortO(right));
}
function mergeO(left, right){
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

     // 去重
    var newArr = [];
    for (var i = 0; i < result.length; i++) {
        if(newArr.indexOf(result[i]) == -1){ // 如果不存在重复的则执行，去重！！！！
            newArr.push(result[i]);
        }
    };
    return newArr;
}

// 排序去重------2
function mergeSortT(arr) {  // 采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return mergeT(mergeSortT(left), mergeSortT(right));
}
function mergeT(left, right){
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());


    // 去重
    let hashObj = {}, newArr = [];
    for (var i = 0; i < result.length; i++) {
        if(!hashObj[result[i]]){   // 如果hash表中不存在，则组成新数组,去重！！！！
            hashObj[result[i]] = true;
            newArr.push((result[i]))
        }
    };
    return newArr;
}

// 排序去重------3
function mergeSortTS(arr) {  // 采用自上而下的递归方法
    var len = arr.length;
    if(len < 2) {
        return arr;
    }
    var middle = Math.floor(len / 2),
        left = arr.slice(0, middle),
        right = arr.slice(middle);
    return mergeTS(mergeSortTS(left), mergeSortTS(right));
}
function mergeTS(left, right){
    var result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length)
        result.push(left.shift());

    while (right.length)
        result.push(right.shift());

    // 去重
    var newArr = [result[0]];

    for (var i = 1; i < result.length; i++) {
        if(newArr.indexOf(result[i]) == -1){ // 如果不存在则执行，新数组,去重！！！！
            newArr.push(result[i])
        }
    };
    return newArr;
}

var arr = [33,22,1,55,3,77,44,22,88,888,22,11,4,2]
// 归并排序
// console.log(shellSort(arr));
// 排序去重------1
// console.log(shellSortO(arr));
// 排序去重------2
// console.log(shellSortT(arr));
// 排序去重------3
console.log(mergeSortTS(arr));


