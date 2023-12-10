function Queue(){
    this.queue = []
}
// 支持链式调用
Queue.prototype.addtask = function(delay, fn){
    this.queue.push({delay, fn})
    return this
}
// start
Queue.prototype.start = function(...args){
    const queue = this.queue;
    let res = Promise.resolve()
    queue.forEach(item => {
        res = res.then(()=>{
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    item.fn(...args)
                    resolve()
                }, item.delay)
            })
        })
    })
}

q = new Queue()
q.addtask(1000, () => console.log(5))
    .addtask(2000, () => console.log(2))
    .addtask(3000, () => console.log(4))
    .start()
