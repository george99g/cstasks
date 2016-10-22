function solveEquation(a, b, c) {
    var d = Math.pow(b, 2) - 4*a*c;
    if(d < 0)
        return {x1:null,x2:null};
    if(d == 0)
    {
        var root = -b/(2*a);
        return {x1:root,x2:root};
    }
    return {
        x1:(-b-Math.sqrt(d))/(2*a),
        x2:(-b+Math.sqrt(d))/(2*a)
    }
}

function solve(args) {
    var roots = solveEquation(
                parseFloat(args[0]),
                parseFloat(args[1]),
                parseFloat(args[2]));
    if(roots.x1===null||roots.x2===null)
        return "no real roots";
    if(roots.x1==roots.x2)
        return "x1=x2="+roots.x1.toFixed(2);
    return "x1="+roots.x1.toFixed(2)+
            "; x2="+roots.x2.toFixed(2);
}

console.log(solve(['2', '5', '-3']));
console.log(solve(['-1', '3', '0']));
console.log(solve(['-0.5', '4', '-8']));
console.log(solve(['5', '2', '8']));
console.log(solve(['0.2', '9.572', '0.2']));
