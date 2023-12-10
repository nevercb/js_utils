Array.prototype.myReduce = function(fn, initValue, context){
    let arr = Array.prototype.slice.call(this) //注意不能用箭头函数
    let value = initValue ? initValue: 0;
    let len = arr.length
    for(let i = 0; i < len; i++){
        value = fn.call(context, value, arr[i], i, this)
    }
    return value
}

let arr = [1, 2, 3, 4, 5]
res = arr.myReduce((value, item, index)=>{
    return value + item
}, 0)
console.log(res)