// 1到100L累加

const processnode = (sum, index) => {
    return index <= 0 ? sum : processnode(sum + index, index - 1)
}

console.log(processnode(0, 100))