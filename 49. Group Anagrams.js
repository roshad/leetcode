var groupAnagrams = function (strs) {
  const primes = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 41, 43, 47, 53, 59, 61, 67, 71,
      73, 79, 83, 89, 97, 101, 103,
    ],
    ht = {};
  for (const str of strs) {
    let hash = 1;
    for (let i = 0; i < str.length; i++)
      hash *= primes[str.charCodeAt(i) - "a".charCodeAt(0)];
    ht[hash] = ht[hash] ? [...ht[hash], str] : [str];
  }
  return Object.values(ht);
};
//不取模的话，str很长会溢出
//取模导致重复
var groupAnagrams = function (strs) {
  const groups = {};
  for (let str of strs) {
    const chaCount = new Array(26).fill(0);
    for (let cha of str) {
      chaCount[cha.charCodeAt(0) - "a".charCodeAt(0)]++;
    }
    groups[chaCount] ? groups[chaCount].push(str) : (groups[chaCount] = [str]);
  }

  return Object.values(groups);
};
