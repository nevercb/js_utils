const isValid = (str, dst) => {
    let j = 0; // j => dst
    for(let i = 0; i < str.length; i++){
        if(str[i] === dst[j] && j < dst.length){
            j++;
        }
    }
    return j === dst.length;
}