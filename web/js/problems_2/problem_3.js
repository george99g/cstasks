function solve(args) {
    return (args[0]*args[1]).toFixed(2) + " " +
            (args[0]*2 + args[1]*2).toFixed(2);
}

console.log(solve(['2.5', '3']));
console.log(solve(['5','5']));
console.log(solve(['3', '4']));
