const total = (str)=>{
    let res = {}
    let realres = {};
    for(let c of str){
        if(!res[c])
            res[c] = 1;
        else 
            res[c]++;
    }
    for(let c in res){
        if(res[c] !== 1)
            realres[c] = res[c]
    }
    return realres
}

console.log(total("abcdde"))