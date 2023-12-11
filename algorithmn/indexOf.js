function myIndexOf(str1, str2){
    let shorter = str1;
    let longger = str2;
    if(str1.length >= str2.length){
        longger = str1;
        shorter = str2;
    }

    let left = 0;
    for(let i = 0; i < longger.length; i++){
        if(longger[i] === shorter[0])
            left = i;
        else 
            continue;
        if(longger.substr(left, shorter.length) === shorter)
            return left; 
    }
    return -1;
}

console.log(myIndexOf("saweee", "we"))