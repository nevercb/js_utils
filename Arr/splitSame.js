// 将一堆整数分为3份，每份和大小尽量相等
var a = [11, 42, 23, 4, 5, 6, 4, 5, 6, 11, 23, 42, 56, 78, 90]

function splitThree(arr){
    let res = [{sum: 0, arr: []}, {sum: 0, arr: []},{sum: 0, arr: []}]
    arr.sort((a, b)=>b - a)// 从大到小排序arr
    for(let i = 0; i < arr.length; i++){
        res.sort((a, b)=> a.sum - b.sum); //从小到大排序res
        res[0].arr.push(arr[i]);
        res[0].sum += arr[i];
    }
    return res;
}
console.log(splitThree(a))