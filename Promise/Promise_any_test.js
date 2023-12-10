const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('p2 delay 1s')
    }, 1000)
})
const p3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('p3 delay 1.5s')
    }, 1500)
})

// 增加失败的用例
const p5 = Promise.reject('p5 failed')
const p4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('p4 failed')
    }, 1000)
})
// 原生Promise.all测试

Promise.any([p1, p2, p3]).then(
    (data)=>{
        console.log(data)
    }
)

// 测试失败用例
Promise.any([p2, p3, p4]).then(
    (resolve) =>{
        console.log(resolve)
    }, (err) => {
        console.log(err); 
    }
)

Promise.any([p4, p5]).then(
    (resolve) => {
        console.log(resolve)
    },(err) => {
        console.log(err);
    }    
)

// 手写Promise.any

Promise.myAny = (promises)=>{
    let len = promises.length
    let arr = []
    let cnt = 0;
    return new Promise((resolve, reject)=>{
        promises.forEach((promise,i) => {
            promise.then((data)=>{
                resolve(data)
            }, (reason)=>{
                arr[i] = reason
                cnt ++;
                if(cnt === len) 
                    reject(`[AggregateError: All promises were rejected]
                        [errors]: [${arr}]
                    `)
            })
        })
    })
}


Promise.myAny([p1, p2, p3]).then(
    (data)=>{
        console.log(data)
    }
)

Promise.myAny([p2, p3, p4]).then(
    (resolve) =>{
        console.log(resolve)
    }, (err) => {
        console.log(err); 
    }
)

Promise.myAny([p4, p5]).then(
    (resolve) => {
        console.log(resolve)
    },(err) => {
        console.log(err);
    }    
)