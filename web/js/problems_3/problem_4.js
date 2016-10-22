function solve(args) {
    var a = parseFloat(args[0]);
    var b = parseFloat(args[1]);
    var c = parseFloat(args[2]);
    if(a > b)
    {
        if(a > c)
        {
            if(b > c)
                return a+" "+b+" "+c;
            else
                return a+" "+c+" "+b;
        }
        else
            return c+" "+a+" "+b;
    }
    else
    {
        if(b > c)
        {
            if(c > a)
                return b+" "+c+" "+a;
            else
                return b+" "+a+" "+c;
        }
        else
            return c+" "+b+" "+a;
    }
}

console.log(solve(['5', '1', '2']));
console.log(solve(['-2', '-2', '1']));
console.log(solve(['-2', '4', '3']));
console.log(solve(['0', '-2.5', '5']));
console.log(solve(['-1.1', '-0.5', '-0.1']));
console.log(solve(['10', '20', '30']));
console.log(solve(['1', '1', '1']));
