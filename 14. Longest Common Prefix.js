
var longestCommonPrefix = function (strs) {
    strs.sort((a, b) => a.length - b.length)
    
    let prefix = (arr.length) ? arr[0] : ''
    let i = 1

    while (prefix && i < arr.length) {
        const next = arr[i];
        while (next.indexOf(prefix) !== 0) prefix = prefix.slice(0, -1);

        i++;
    }
    return prefix;
};
