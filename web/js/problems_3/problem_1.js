function solve(args) {
    var a = args[0];
    var b = args[1];
    if(a > b)
    {
        var s = a;
        a = b;
        b = s;
    }
    return a + " " + b;
}

console.log(solve(['5', '2']));
console.log(solve(['3', '4']));
console.log(solve(['5.5', '4.5']));
