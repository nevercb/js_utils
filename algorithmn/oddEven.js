// 实现一个函数a，使其奇数次调用时返回1，偶数次调用时返回2（不能使用全局变量）

let A = (function(){
    let cnt = 0;
    return function(){
        cnt++;
        if(cnt % 2 == 1) return 1
        else return 2;
    }
})()
console.log(A())
console.log(A())