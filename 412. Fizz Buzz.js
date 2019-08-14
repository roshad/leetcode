var fizzBuzz = function(n) {
    let r = [];
    for (let i = 1; i <= n; i++)
        r.push(
            i % 15 == 0
                ? "FizzBuzz"
                : i % 5 == 0
                ? "Buzz"
                : i % 3 == 0
                ? "Fizz"
                : i + ""
        );
    return r;
};
