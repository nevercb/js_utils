const str = `1 2 3
4 5 6
7 8 9 `;

let arr = str.split("\n");
console.log(arr);
const res = []
for(let item of arr){
    let items = item.split('').filter(item => item != ' ')
    res.push(items);
}
console.log(res)
