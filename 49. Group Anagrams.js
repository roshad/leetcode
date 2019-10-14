//115ms
var groupAnagrams = function(strs) {
    const primes = [
            2,
            3,
            5,
            7,
            11,
            13,
            17,
            19,
            23,
            29,
            31,
            41,
            43,
            47,
            53,
            59,
            61,
            67,
            71,
            73,
            79,
            83,
            89,
            97,
            101,
            103
        ],
        ht = {};
    for (const str of strs) {
        let hash = 1;
        for (const cha of str)
            hash *= primes[cha.charCodeAt(0) - "a".charCodeAt(0)];
        if (ht.hasOwnProperty(hash)) ht[hash].push(str);
        else ht[hash] = [str];
    }
    return Object.values(ht);
};
