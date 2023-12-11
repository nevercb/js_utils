const isSymmetry = (start, end)=>{
    for(let i = start; i <= end; i++){
        let str = String(i)
        if(str.length <= 1) continue;
        if(str.split("").reverse().join("") === str)
            console.log(i)
    }
}
isSymmetry(1,1000)