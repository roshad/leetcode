var isPalindrome = function (s) {
    s = s.toLowerCase().replace(/\W+/g, "");
    var i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++; j--;
    }
    return true;

};
