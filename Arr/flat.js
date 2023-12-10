myFlat = (arr) => {
    return arr.reduce((res, item) => {
        if(Array.isArray(item))
            return [...res, ...myFlat(item)]
        else
            return [...res, item]
    }, []) // 不要忘记传入初始值
}

let newarr = myFlat([[1, 2, 3], [4, 5]])
console.log(newarr)