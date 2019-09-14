//104ms
//不能用之前出现的ind作为开头，因为可能中间有其它重复
var lengthOfLongestSubstring = function(s) {
    let mem = {},
        cur_len = 0,
        max_len = 0,
        sta=0;
    if (s.length == 1) return 1;
    for (let ind in s) {
        const cha = s[ind]
        if (mem[cha] === undefined) cur_len++;
        else {
            sta = Math.max(sta, mem[cha]);
            cur_len = ind - sta;
        }

        max_len = Math.max(max_len, cur_len);
        mem[cha] = ind;
    }
    return max_len;
};

//144ms
//需要在再次开始增加时算 之前的长度，无需+1，否则多算
var lengthOfLongestSubstring = function(s) {
    let sta = 0,
        end = 0,
        len = s.length,
        set = new Set(),
        max_length = 0;

    while (end < len) {
        if (!set.has(s[end])) {
            set.add(s[end++]);
            max_length = Math.max(max_length, end - sta);
        } else set.delete(s[sta++]);
        //console.log(end,max_length)
    }
    return max_length;
};
//72ms
//longest很短时由于步骤少会较快，但实际复杂度为 n2
var lengthOfLongestSubstring = function(s) {
    var max = 0,
        sta = 0;
    for (var end = 0; end < s.length; end++) {
        var fcci = s.indexOf(s[end], sta); //fcci = first current char index
        if (fcci !== -1 && fcci < end) sta = fcci + 1;

        max = Math.max(max, end - sta + 1);
    }
    return max;
};

var lengthOfLongestSubstring = function(s) {
    if (s.length === 1) return 1;

    let longestLen = 0,
        curLen = 0,
        sta = 0;
    letterIndexes = new Array(255); //Unicode一共最多有256位

    for (let i = 0; i < s.length; i++) {
        let letter = s[i].charCodeAt(0); // letter赋值为第一个字符的Unicode
        if (letterIndexes[letter] >= sta) {
            //出现过
            sta = letterIndexes[letter] + 1;
            curLen = i - sta;
        }
        letterIndexes[letter] = i; // 重复字符的新位置存起来
        curLen++; //补齐少的那个1

        if (curLen > longestLen) longestLen = curLen;
    }
    return longestLen;
};
