const yellow = () => {
    console.log('yellow');
}

const red = () => {
    console.log('red');
}
const green = () => {
    console.log('green');
}

const task = (timer, light) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(light === 'yellow')
                yellow()
            else if(light === 'red')
                red()
            else if(light === 'green')
                green()
            resolve()
        }, timer)
    })
}

const step = () => {
    task(3000, 'red')
    .then(()=>task(2000, 'green'))
    .then(()=>task(1000, 'yellow'))
    .then(step) // 注意循环
}

step()




// async/await

// const step1 = async() => {
//     await task(3000, 'red')
//     await task(2000, 'green')
//     await task(1000, 'yellow')
//     step1()
// }
// step1()