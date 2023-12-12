const isEqual = (obj1, obj2) => {
    if(typeof obj1 !== typeof obj2) return false;
    if(typeof obj1 === null && typeof obj2 !== null) return false;
    if(typeof obj2 === null && typeof obj1 !== null) return false;
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);
    if (key1.length !== key2.length) return false;
    let flag = true;
    for(const k of key1){
        if(!key2.includes(k)) return false;
        if(typeof obj1[k] === "object" || typeof obj2[k] === 'object')
            if(!isEqual(obj1[k], obj2[k])){
                flag = false;
                return flag;
            }
        else if(obj1[k] !== obj2[k])
            return false;
    }
    return flag;
}