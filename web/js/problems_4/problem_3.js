function solve(args) {
    var output = "";
    for(var row = 1; row <= args[0]; row++) {
        output += row;
        for(var column = 2; column <= args[0]; column++)
            output += " " + (row + column - 1);
        output += "\n";
    }
    return output;
}

console.log(solve(['2']));
console.log(solve(['3']));
console.log(solve(['4']));
