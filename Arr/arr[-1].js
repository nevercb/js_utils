// 手写ES6Proxy实现arr[-1]的访问

let arr = [1, 2, 3, 4]
let handler = {
    get: (target, property)=>{
        if(property < 0){
            return target[target.length + parseInt(property)]
        }
        return target[property]
    }
}
let proxy = new Proxy(arr, handler);


console.log(proxy['-1'])