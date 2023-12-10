const promiseRetry = (asyncFn, maxtime)=>{
    return new Promise((resolve, reject)=>{
        tries = 0;
        
        function attempt(){
            asyncFn().
            then((data)=>{
                resolve(data)
            }, (reason)=>{
                tries++
                if(tries === maxtime){
                    reject(reason)
                    return
                }
                attempt()
            })
        }
        attempt()
    })
}

const asyncFn = function(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject('failed')
            console.log('xxx')
        },1000)
    })
}

promiseRetry(asyncFn, 5).then((data)=>console.log(data))
.catch(err=>console.log(err))