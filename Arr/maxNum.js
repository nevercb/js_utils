const maxNum = (arr) => {
    let len = arr.length;
    let max_num = arr[0];
    for(let i = 0; i < len; i++){
        if(arr[i] > max_num)
            max_num = arr[i];
    }
    return max_num;
}
let arr = [1, 2,6, 21];
console.log(maxNum(arr));