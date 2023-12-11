// 十进制->二进制，字符串
x = 100
let str = ''
while(x){
    str += x & 1 ? '1' : '0' // 按位
    x >>= 1
}
console.log(str.split('').reverse().join(''))

// 字符串中字母出现的此书

let str1 = "abccc123"
let cnt = 0;
for(let c of str1){
    if((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))
        cnt++;
}
console.log(cnt)