function solve(args) {
    return args[0].replace(/ /g, "&nbsp;");
}

console.log(solve(['hello world']));
console.log(solve(['This text contains 4 spaces!!']));
