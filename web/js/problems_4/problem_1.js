function solve(args) {
    var returnString = "1";
    for(var i = 2; i <= args[0]; i++)
        returnString += " " + i;
    return returnString;
}

console.log(solve(['5']));
console.log(solve(['1']));
