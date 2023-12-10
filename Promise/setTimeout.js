// setTimeout using setTimeInterval

function mySetTimeOut(fn, time){
    const timer = setInterval((...args)=>{
        fn.apply(this, args)
        clearInterval(timer)
    }, time)
    return timer
}