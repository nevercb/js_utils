function delaytime(i){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(i)
            resolve()
        }, 1000)
    })
}

async function consolelog(){
    for(let i = 0; i < 5; i++)
        await delaytime(i + 1)
}

consolelog()

