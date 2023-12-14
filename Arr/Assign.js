// 先实现对象的assgin
// 即对象属性进行合并，src可以覆盖obj的属性

var obj1 = {
    a: 1,
    b: {
        c: 2,
        d: 3
    },
    e: 4,
    h: {
        i: 5
    }
}
var obj2 = {
    a: 111,
    b: {
        c: 222,
        f: 333
    },
    g: 444,
    h: 666
}
// 实现一个mergeObject(obj1, obj2)方法，得到下面的对象，并转化成JSON输出到#app
var obj = {
    a: 111,
    b: {
        c: 222,
        d: 3,
        f: 333
    },
    e: 4,
    g: 444,
    h: 666
}


console.log(JSON.stringify(Object.assign(obj1, obj2)))

// 实现Assign

const myAssign = (obj, ...src) => {
    for(let i = 0; i < src.length; i++){
        if(src[i] !== null && src[i]){
            for(let index in src){
                if(src[i].hasOwnProperty(index))
                    obj[index] = src[i][index]
            }
        }
    }
    return obj;
}
console.log(myAssign(obj1, obj2))
console.log(JSON.stringify(myAssign(obj1, obj2)));


// 数组assign
let arr1 = [1, 2, 3]
let arr2 = [2, 3, 4]

const merge = (arr1, arr2) => {
    return [...new Set([...arr1, ...arr2])]
}

const merge2 = (arr1, arr2) => {
    return arr1.concat(arr2).filter((item, index, arr) => {
        return arr.indexOf(item) === index 
    })
}
console.log(merge(arr1, arr2))
console.log(merge2(arr1, arr2))