class EventBus {
    constructor(){
        this.tasks = {};
    }

    on(type, fn){
        if(!this.tasks[type])
            this.tasks[type] = fn
        else 
            this.tasks[type].push(fn)            
    }

    Off(type, fn){
        if(!this.tasks[type]) return
        this.tasks[type] = this.tasks[type].filter(item != fn)
    }

    emit(type, ...args){
        if(!this.tasks[type]) return
        this.tasks[type].forEach(cb => cb(...args))
    }

    once(type, fn){
        if(!this.task[type]) this.task[type] = []
        function __once(...args){
            fn(...args)
            this.off(type, __once)
        }
        this.task[type].push(__once)
    }
}

