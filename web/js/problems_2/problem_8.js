function getArea(arg1) {
    return (arg1.a+arg1.b)/2*arg1.h;
}

function solve(args) {
    var trapezoid = {a:parseFloat(args[0]),
                     b:parseFloat(args[1]),
                     h:parseFloat(args[2])};
    return getArea(trapezoid).toFixed(7);
}

console.log(solve(['5',     '7',     '12']));
console.log(solve(['2',     '1',     '33']));
console.log(solve(['8.5',   '4.3',   '2.7']));
console.log(solve(['100',   '200',   '300']));
console.log(solve(['0.222', '0.333', '0.555']));
