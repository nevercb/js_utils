// 随即生成一个颜色

const color = () => {
    const _color = () => {
        let str =  Math.floor(Math.random() * 255).toString(16)
        return str.padStart(2, '0');
    }
    return `#${_color()}${_color()}${_color()}`;
}

console.log(color())