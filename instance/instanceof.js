const myInstanceOf = (src, dst) => {
    let proto = Object.getPrototypeOf(src)
    let prototype = dst.prototype
    while(true){
        if(!proto) return false
        if(proto === prototype) return true;
        proto = Object.getPrototypeOf(proto)
    }
} 

function People(){}
p = new People()

console.log(myInstanceOf(p, People))