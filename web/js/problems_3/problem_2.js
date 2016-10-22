function solve(args) {
    var a = args[0];
    var b = args[1];
    var c = args[2];
    if(a == 0 || b == 0 || c == 0)
        return "0";
    var negatives = 0;
    if(a < 0)
        negatives++;
    if(b < 0)
        negatives++;
    if(c < 0)
        negatives++;
    return negatives%2==0?"+":"-";
}

console.log(solve(['5', '2', '2']));
console.log(solve(['-2', '-2', '1']));
console.log(solve(['-2', '4', '3']));
console.log(solve(['0', '-2.5', '4']));
console.log(solve(['-1', '-0.5', '-5.1']));
