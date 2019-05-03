function leastInterval(tasks, n) {
    let fre = Array(26).fill(0)

    for (let task of tasks) fre[task.charCodeAt(0) - "A".charCodeAt(0)]++

    fre.sort((a, b) => b - a)

    let fs = 1 //frequency same 
    while (fs < 26 && fre[fs] == fre[0]) fs++

    return Math.max(tasks.length, (fre[0] - 1) * (n + 1) + fs)
}