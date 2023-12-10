const p1 = Promise.resolve('p1')
const p2 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('p2 delay 1s')
    }, 1)
})
const p3 = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('p3 delay 1.5s')
    }, 1.5)
})

// 增加失败的用例
// const p4 = new Promise((resolve, reject)=>{
//     reject('p4 faild')
// })

// 原生Promise.race测试

Promise.race([p1, p2, p3]).then(
    (data)=>{
        console.log(data)
    }
)

// 测试失败用例
Promise.race([p3,p2]).then(
    (resolve) =>{
        console.log(resolve)
    }, (err) => {
        console.log(err); 
    }
)

// 手写Promise.race

Promise.myRace = function(promises){
    return new Promise((resolve, reject)=>{
        promises.forEach((promise)=>{
            Promise.resolve(promise).then((data)=>{
                resolve(data)
            }, (reason)=>{
                reject(reason)
            })
        })
    })
}
// // myRace测试


Promise.myRace([p1, p2, p3]).then(
    (data)=>{
        console.log(data)
    }
)

// 测试失败用例
Promise.myRace([p3,p2]).then(
    (resolve) =>{
        console.log(resolve)
    }, (err) => {
        console.log(err); 
    }
)
