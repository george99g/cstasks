function solve(args) {
    if(args[0] <= 1)
        return false;
    if(args[0] <= 3)
        return true;
    if(args[0]%2==0||args[0]%3==0)
        return false;
    for(var i = 5; Math.pow(i, 2) <= args[0]; i+=6)
        if(args[0]%i==0 || args[0]%(i+2) == 0)
            return false;
    return true;
}

console.log(solve(['2']));
console.log(solve(['23']));
console.log(solve(['-3']));
console.log(solve(['0']));
console.log(solve(['1']));
