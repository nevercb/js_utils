// before(num,fn)接受两个参数，第一个参数是数字，第二个参数是函数，调用before函数num次数以内，返回与fn执行相同的结果，超过num次数返回最后一次fn的执行结果。

const before = (fn, times)=>{
    let cnt = 0;
    let res = 0;
    return function(...args){
        context = this
        if(cnt === 0){
            res = fn.call(context, ...args)
        }
        if(cnt < times){
            cnt++
            return res
        }
        return fn.call(context, ...args)
    }
}
fn = function(val){
    return this.a + val
}
obj = {
    "a": 2
}
need = before(fn, 2)
console.log(need.call(obj, 4))
// 说明实现的before支持this