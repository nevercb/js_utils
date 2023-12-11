class Sheduler{
    constructor(max){
        this.max = max
        this.queue = []; //等待的人物
        this.count = 0; //执行中的并发任务数量
    }
    async add(fn){
        if(this.count >= this.max){
            await new Promise((resolve) => this.queue.push(resolve))
        }
        this.count++;
        let res = await fn()
        this.count--;
        this.queue.length && this.queue.shift()()
        return res;
    }
}

const sleep = time => new Promise((resolve) => setTimeout(()=> resolve(), time))
const addTask = (time, val) => {
    sheduler.add(()=>{
        return sleep(time).then(()=>console.log(val))
    })
}

let sheduler = new Sheduler(2)

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
