class Maths{
    constructor(){
        this.cur = 0;
    }

    add(...args){
        let val = this.cur
        this.cur = args.reduce((cur, item) => {
            return cur + item
        }, val)
        return this; 
    }

    minus(...args){
        this.cur = args.reduce((cur, item) => {
            return cur - item
        }, this.cur)

        return this;
    }

    times(d){
        this.cur *= d;
        return this;
    }

    getVal(){
        return this.cur;
    }
}
console.log(new Maths().add(2, 4).minus(1,1).getVal());