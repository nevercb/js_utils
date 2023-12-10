Array.prototype.myMap = function(fn, context){
    let arr = Array.prototype.slice.call(this)
    let newarr = []
    for(let i = 0; i < arr.length; i++)
        newarr[i] = fn.call(context, arr[i], i, this)
    return newarr;
}

let arr = [1, 3, 4]

let newarr = arr.myMap((item) => {return item + 1})

console.log(newarr)