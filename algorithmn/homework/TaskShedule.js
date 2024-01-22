// 任务调度问题

const TaskShedule = (tasks) => {
  let len = tasks.length;
  tasks.sort((a, b) => b.w - a.w);
  let visitors = new Array(len, false);
  let res = 0;
  for (let i = 0; i < len; i++) {
    let di = tasks[i].d - 1;
    let flag = false;
    if (di >= 0 && !visitors[di]) {
      visitors[di] = true;
      flag = true;
    } else {
      while (di >= 0 && visitors[di]) {
        di -= 1;
        if (di && !visitors[di]) {
          visitors[di] = true;
          flag = true;
          break;
        }
      }
    }
    if (!flag) {
      res += tasks[i].w;
      console.log(`任务${tasks[i].index}超时，惩罚${tasks[i].w}`);
    }
  }
  return res;
};
tasks = [
  {
    index: 1,
    d: 4,
    w: 70,
  },
  {
    index: 2,
    d: 2,
    w: 60,
  },
  {
    index: 3,
    d: 4,
    w: 50,
  },
  {
    index: 4,
    d: 3,
    w: 40,
  },
  {
    index: 5,
    d: 1,
    w: 30,
  },
  {
    index: 6,
    d: 4,
    w: 20,
  },
  {
    index: 7,
    d: 6,
    w: 10,
  },
];
task2 = [
  {
    index: 1,
    d: 4,
    w: 0,
  },
  {
    index: 2,
    d: 2,
    w: 10,
  },
  {
    index: 3,
    d: 4,
    w: 20,
  },
  {
    index: 4,
    d: 3,
    w: 30,
  },
  {
    index: 5,
    d: 1,
    w: 40,
  },
  {
    index: 6,
    d: 4,
    w: 50,
  },
  {
    index: 7,
    d: 6,
    w: 60,
  },
];
console.log("更改W后总惩罚为", TaskShedule(task2));
