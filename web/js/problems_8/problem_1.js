function reverse(input) {
    var newString = "";
    for(var i = input.length - 1; i >= 0; i--)
        newString += input[i];
    return newString;
}

function solve(args) {
    return reverse(args[0]);
}

console.log(solve(['sample']));
console.log(solve(['qwertytrewq']));
