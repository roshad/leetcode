var lengthOfLongestSubstring = function(s) {
    const curkv = {},cur_len=0
    for (let [key,val] of s){
        if (!cur[val]) {
            cur[val]=key
            cur_len++
        }
        else {
            cur_len=0
            
        }
    }
};