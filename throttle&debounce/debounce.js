const debounce = function(fn, delay, context){
    let timer = null;
    return function(...args){
        if(timer)
            clearTimerout(timer);
        timer = setTimeout(() => {
          fn.call(context, ...args)  
        }, delay)
    }
}

const debounce_await = function(fn, delay, context){
    let timer = null;
    return function(...args){
        return new Promise((resolve, reject)=>{
            if(timer){
                clearTimeout(timer)
            }
            timer = setTimeout(()=>{
                fn.call(context, ...args)
            }, delay)
        })
    }
}

// const fn = debounce_await(console.log, 1000, null)
// const runner = async() => {
//     await fn(3)
// }
// runner()
// runner()
// runner()


// 第一次立即执行
const debounce_await_v2 = function(fn, delay, context){
    let timer = null;
    let cnt = 0;
    return function(...args){
        return new Promise((resolve, reject)=>{
            if(timer){
                clearTimeout(timer)
            }
            if(cnt === 0){
                fn.call(context, ...args)
                cnt++;
            } else {
                timer = setTimeout(()=>{
                    fn.call(context, ...args)
                }, delay)    
            }
        })
    }
}


const fn = debounce_await_v2(console.log, 1000, null)
const runner = async() => {
    await fn(3)
}
runner()
runner()
runner()