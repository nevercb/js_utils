// map arrs to Map{"categories": ["names"...]}
const arrs = [
    {
      name: "可乐",
      categories: ["热门", "饮料"],
    },
    {
      name: "苹果",
      categories: ["热门", "食物"],
    },
    {
      name: "洗衣液",
      categories: ["生活用品"],
    },
  ];

  // 
  let map = new Map()
  for(let item of arrs){
    let {name, categories} = item
    for(let c of categories){
        if(!map.has(c)) 
            map.set(c, [name])
        else {
            val = map.get(c)
            val.push(name)
            map.set(c, val)
        }
    }
  }
  console.log(map)