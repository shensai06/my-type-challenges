export type MyPick<T,K extends keyof T>= {[P in K]:T[P]}

// 从 T 中提取  子集 ,这些子集的 key 组成 K 数组，  any 是这个子集 的 结果
// T = {a:1,b:2,c:3};
// 如果 K = ['b','c']
// 则 any = {b:2,c:3};
// 对于泛型来说  T 和 K  有紧密关系 所以必须将关系在尖括号内标识
// 原生 TS 尽量使用大写字母


// js思路理解则  todos 为 T  ，K为 obj  函数return 为 any
function  myPick (todos,keys){
  let obj = {}
  keys.forEach(key=>{
    if(key in todos){
      obj[key] = todos[key];
    }
  })
  return obj
}