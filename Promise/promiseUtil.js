// 返回Promise如果没有超出时间，否则返回异常

// use Promise.race
const promiseUtils = (promise) => {
    return Promise.race(
        [promise,
        new Promise((resolve, reject)=>{
            setTimeout(()=>{
                reject("overtime")
            }, 1000)
        })
        ]
    )
}
// test
p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("success")
    }, 1001)
})
promiseUtils(p1).then((data)=>
    console.log(data)
).catch((err)=>{
    console.log(err)
})