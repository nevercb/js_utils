const randomstr = (len) => {
    const str = "abcdefghijklmnopqrstuvwxyz0123456789"
    const length = str.length
    let res = "";
    for(let i = 0; i < len; i++){
        res += str[Math.floor(Math.random() * length)]
    }
    return res;
}

console.log(randomstr(12))