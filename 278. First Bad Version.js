var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let sta=1,end=n,mid
        while (sta!=end){
            mid = Math.trunc((sta+end)/2)
            if (isBadVersion(mid)) end = mid
            else sta = mid + 1
        }
        
        return sta
    };
};