const WeightBagProblem = (weight, value, size) => {
  // 定义 dp 数组
  const len = weight.length,
    dp = Array(len)
      .fill()
      .map(() => Array(size + 1).fill(0));

  // 初始化
  for (let j = weight[0]; j <= size; j++) {
    dp[0][j] = value[0];
  }

  // weight 数组的长度len 就是物品个数
  for (let i = 1; i < len; i++) {
    // 遍历物品
    for (let j = 0; j <= size; j++) {
      // 遍历背包容量
      if (j < weight[i]) dp[i][j] = dp[i - 1][j];
      else
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
    }
  }

  console.table(dp);

  return dp[len - 1][size];
};

function test() {
  console.log(WeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
}

test();

const WeightBagProblem_2 = (max, n, items) => {
  //存储背包中物品总重量的最大值
  let maxW = 0;
  __f(0, 0, items, n, max);
  return maxW;
  // cw表示当前已经装进去的物品的重量和
  // i表示考察到哪个物品了
  // w背包重量
  // items表示每个物品的重量
  function __f(i, cw, items, n, w) {
    if (cw === w || i === n) {
      // cw === w表示装满了;i === n表示已经考察完所有的物品
      if (cw > maxW) maxW = cw;
      return;
    }
    f(i + 1, cw, items, n, w); // 不装第 i + 1 个物品的情况
    if (cw + items[i] <= w) {
      // 已经超过可以背包承受的重量的时候，就不要再装了
      f(i + 1, cw + items[i], items, n, w); // 装第 i + 1 个物品的情况
    }
  }
};
