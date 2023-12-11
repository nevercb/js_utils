// 去除相邻的a和c，去除b
const removeArr = (str) => {
    let res = []
    for(let c of str){
        if(c === 'b') continue
        if(c !== 'c') {
            res.push(c)
            continue
        }
        if(c === 'c' && res.length && res[res.length - 1] === 'a')
            res.pop()
        else 
            res.push(c)
    }
    return res.join("")
}
console.log(removeArr("aaabbacc"))