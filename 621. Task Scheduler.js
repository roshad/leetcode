// 1.记录每种任务的 下次可行时间 与 剩余次数，更新到下次可行的最小值>每次更新
// 2.图形法
// (maxExec−1 最大执行数-1)(n+1 无重复行长)+最大执行数的任务种数
// 当种数>行长，有可能图形多算
var leastInterval = function (tasks, n) {
  const freqs = _.countBy(tasks),
    maxFreq = Math.max(...Object.values(freqs)),
    maxCount = Object.values(freqs).reduce(
      (acc, cur) => (cur == maxFreq ? acc + 1 : acc),
      0
    );

  return Math.max((n + 1) * (maxFreq - 1) + maxCount, tasks.length);
};
