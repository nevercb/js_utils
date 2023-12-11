// 压缩字符串（思路将相同的字符变为字符+数量的形式）


const compressStr = (str)=>{
    if(str.length === 0 || str.length === 1) return str;
    let res = "";
    let cur = str[0];
    let count = 1;
    for(let i = 1; i < str.length; i++){
        if(str[i] != str[i - 1]) {
            res += `${cur}${count}`
            cur = str[i];
            count = 1;
        }
        else 
            count++;
    }
    res += `${cur}${count}`
    return res
}

console.log(compressStr("aaabbcccc"))