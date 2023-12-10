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

Promise.allSettled([p1, p2, p3]).then(
    (data)=>{
        console.log(data)
    }
)

// 测试失败用例
Promise.allSettled([p1, p3, p4]).then(
    (resolve) =>{
        console.log(resolve)
    }, (err) => {
        console.log(err); 
    }
)

// 手写Promise.allSettled

Promise.myAllSettled = (promises) => {
    let len = promises.length
    let arr = []
    let cnt = 0;
    if(len === 0)
        return Promise.resolve(arr)
    return new Promise((resolve, reject)=>{
        promises.forEach((promise,i) => {
            Promise.resolve(promise).then((data)=>{
                arr[i] = {status: 'fulfilled', value: data}
                cnt++;
                if(cnt === len)
                    resolve(arr)
            }, (reason)=>{
                arr[i] = {status: 'rejected', value: reason}
                cnt++
                if(cnt === len)
                    resolve(arr)
            })
        });
    })
}



Promise.myAllSettled([p1, p2, p3]).then(
    (data)=>{
        console.log(data)
    }
)

// 测试失败用例
Promise.myAllSettled([p1, p3, p4]).then(
    (resolve) =>{
        console.log(resolve)
    }, (err) => {
        console.log(err); 
    }
)