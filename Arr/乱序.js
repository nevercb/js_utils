const generateRandomArr = (len, min, max)=>{
    if(max - min < len) return null;
    const hash = []
    while(hash.length < len){
        let randomnum = Math.floor(Math.random() * max)
        if(randomnum < min) continue;
        if(hash.indexOf(randomnum) == -1) 
            hash.push(randomnum)
    }
    return hash
}

// 整数版本

newarr = generateRandomArr(10, 5, 20)
console.log(newarr)