function one(fn, time, args){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            fn.call(this, args)
            resolve()
        },time)
    })
}

function repeat(fn, times, wait){
    return async function(args){
        for(let i = 0; i < times; i++){
            await one(fn, wait, args)
        }
    }
}

fn = repeat(console.log, 5, 1000)
fn(50) //打印50共5次，每次隔1000ms