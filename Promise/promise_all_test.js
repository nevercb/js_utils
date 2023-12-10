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
const p4 = new Promise((resolve, reject)=>{
    reject('p4 faild')
})

// 原生Promise.all测试

Promise.all([p1, p2, p3]).then(
    (data)=>{
        console.log(data)
    }
)

// 测试失败用例
Promise.all([p1, p3, p4]).then(
    (resolve) =>{
        console.log(resolve)
    }, (err) => {
        console.log(err); 
    }
)

// 手写Promise.all

Promise.myAll = function(promises){
    let len =  promises.length
    let res = []
    let cnt = 0;
    if(len === 0)
        return new Promise((resolve)=>{
            resolve(res)
        })
    return new Promise((resolve, reject) => {
        promises.forEach((promise, i) => {
            Promise.resolve(promise).then(data => {
                res[i] = data
                cnt++;
                if(cnt == len)
                    resolve(res)
            }, (err) => {
                reject(err)
            })
        });
    })
}

// myAll测试

Promise.myAll([p1, p2, p3]).then(
    (data)=>{
        console.log(data)
    }
)

// 测试失败用例
Promise.myAll([p1, p3, p4]).then(
    (resolve) =>{
        console.log(resolve)
    }, (err) => {
        console.log(err); 
    }
)

