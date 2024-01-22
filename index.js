// 实现Promise.prototype.finally

Promise.prototype.finally = function (onSettled) {
  return this.then(
    async (data) => {
      await onSettled();
      return data;
    },
    async (reason) => {
      await onSettled();
      throw reason;
      // 注意throw reason
    }
  );
};

// Promise.all
Promise.myAll = function (promiseArr) {
  res = [];
  cnt = 0;
  return new Promise((resolve, reject) => {
    if (promises == null || typeof promises[Symbol.iterator] !== "function")
      throw new TypeError(`${promises} is not a iterable`);
    if (promises.length === 0) resolve([]);
    promiseArr.forEach((item, index) => {
      Promise.resolve(item)
        .then((data) => {
          res[index] = data;
          cnt++;
          if (cnt === promiseArr.length) resolve(res);
        })
        .catch((reason) => {
          reject(reason);
        });
    });
  });
};

//Promise.allSettled

Promise.allSettled = function (arrs) {
  const res = [];
  let cnt = 0;
  return new Promise((resolve, reject) => {
    arrs.forEach((item, index) => {
      Promise.resolve(item)
        .then((data) => {
          res[index] = {
            status: "FULFILLED",
            data,
          };
          cnt++;
        })
        .catch((data) => {
          res[index] = {
            status: "REJECTED",
            data,
          };
          cnt++;
        })
        .finally(() => {
          if (cnt === promiseArr.length) resolve(res);
        });
    });
  });
};

// Promise.race

Promise.myRace = (promiseArr) => {
  return new Promise((resolve, reject) => {
    promiseArr.forEach((item, index) => {
      Promise.resolve(item).then(
        (data) => {
          resolve({ data, index });
        },
        (reason) => {
          reject({ reason, index });
        }
      );
    });
  });
};

// Promise.resolve

Promise.myResolve = function (data) {
  if (data instanceof Promise) return data;
  return new Promise((resolve, reject) => {
    resolve(data);
  });
};

// React _render()

const _render = (vnode) => {
  if (typeof vnode === "number") {
    vnode = String(vnode);
  }
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }
  // 普通dom
  const dom = document.createElement(vnode.tag);
  if (vnode.attrs) {
    Object.keys(vnode.attrs).forEach((key) => {
      const value = vnode.attrs[key];
      dom.setAttribute(key, value);
    });
  }
  child = vnode.children;
  if (child) child.forEach((item) => dom.appendChild(_render(item)));
  return dom;
};

// 树形结构转列表
const data = {
  id: 1,
  text: "xxx",
  parentId: 0,
  children: [
    {
      id: 2,
      text: "xxx",
      parentId: 1,
    },
  ],
};

const treeToList = (data) => {
  let res = [];
  const dfs = (tree) => {
    tree.forEach((item) => {
      res.push({
        id: item.id,
        text: item.text,
        parentId: item.parentId,
      });
      if (item.children) dfs(item.children);
    });
  };
  dfs(data);
  return res;
};

// Array.prototype.flat

Array.prototype.myFlat = ()=>{
    let res = []
    for(const p of this){
        if(Array.isArray(p))
            res = res.concat(p.flat())
        else   
            res.push(p)
    }
    return res;
}


const myInstanceof = (left, right) => {
    // 使用Object.getPrototypeOf获得__proto__
    let proto = Object.getPrototypeOf(proto);
    let prototype = right.prototye;
    while(true){
        if(!proto) return false;
        if(proto === prototype) return false;
        proto = Object.getPrototypeOf(proto)
    }
}

// call, apply, bind

Function.prototype.call2 = (context, ...args){
    context = (context === undefined || context === null) ? window: context; 
    // 规范规定
    context.fn = this;
    const res = context.fn(...args);
    delete context.fn;
    return res;
}

// apply, bind
Function.prototype.apply2 = (context, args)=>{
    context = (context === undefined || context === null) ? window: context; 
    context.fn = this;
    const res = context.fn(...args)
    delete context.fn;
    return res;
}

Function.prototype.bind2 = (context, ...args)=>{
    context = (context === undefined || context === null) ? window: context; 
    const _this = this;
    return function(){
        context.fn = _this;
        let res = context.fn(...args);
        delete context.fn;
        return res;
    }
}

