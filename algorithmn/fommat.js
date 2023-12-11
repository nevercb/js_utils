//// 实现一个函数，
// 把一个字符串数组（[‘zm’, ‘za’, ‘b’, ‘lm’, ‘ln’, ‘k’]） 格式化成一个对象
// { ‘b’: [‘b’], ‘k’: [‘k’], ‘l’: [‘lm’, ‘ln’], ‘z’: [‘za’, ‘zm’] }

const parse = (arr) => {
    let obj = {};
    arr.forEach((item) => {
        let key = item[0]
        obj[key] = []
    })

    for(let str of arr){
        obj[str[0]].push(str)
    }
    return obj
}
console.log(parse(['zm', 'zn', 'ba', 'bz']))