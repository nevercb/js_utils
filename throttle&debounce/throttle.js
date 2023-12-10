
const throttle = function(fn, delay, context){
    let currentTime = Date.now();
    return function(...args){
        if(Date.now() - currentTime < delay)
            return;
        timer = setTimerout(() => {
            fn.call(context, ...args)
        }, delay)
        currentTime = Date.now()
    }
}

// 支持async,await
const throttle2 = function(fn, delay, context){
    let timer = null;
    return function(...args){
        return new Promise((resolve, reject)=>{
            if(!timer){
                timer = setTimeout(()=>{
                    fn.call(context, ...args)
                    resolve();
                    timer = null;
                }, delay)
            }
        })
    }
}

let fn = throttle2(console.log, 1000, null)
const run = async()=>{
    await fn(50)
}
run()
run()
run()