// 实现一个无限延伸的数组，1,2,3,....

function* infiniteArrayGenerator(){
    let i = 0;
    while(true){
        yield i++;
    }
}

const infiniteArr = infiniteArrayGenerator()
console.log(infiniteArr.next().value);
console.log(infiniteArr.next().value);
console.log(infiniteArr.next().value);