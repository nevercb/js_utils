// QuickSort by javacsript

const quickSort = (arr) => {
    if(arr.length <= 1) return arr;
    const pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr[pivotIndex]
    let left = []
    let right = []
    for(let i = 0; i < arr.length; i++){
        if(i === pivotIndex)
            continue
        if(arr[i] < pivot)
            left.push(arr[i])
        else 
            right.push(arr[i])
    }
    if(!left || !right)
        return left.concat([pivot], right);
    return quickSort(left).concat([pivot], quickSort(right))
}

const arr1 = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

const rst = quickSort(arr1)
console.table(rst)