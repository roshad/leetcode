function divide(dividend, divisor) {
    if (dividend == -2147483648 && divisor == -1) return 2147483647;    


    let 
        den = Math.abs(dividend), sor = Math.abs(divisor), quo = 0,
        neg = dividend > 0 ^ divisor > 0 ? 1 : 0;
    
    while (den >= sor) {
        let st = sor, qt = 1;
        while (st  <= den>>1) {
            st <<= 1;
            qt <<= 1;
        }
        den -= st;
        quo += qt;
    }
    return neg?-quo:quo;
}