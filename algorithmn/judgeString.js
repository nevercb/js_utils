const judgeString = (arr)=>{
    return arr.filter((item) => {
        let type = typeof(item)
        if(type === 'string') return true;
        if(type === 'object')
            return Object.prototype.toString.call(item) === "[object String]"
    })
}
p = new String("123")
console.log(Object.prototype.toString.call(p))

console.log(judgeString(["123", p, 123]))