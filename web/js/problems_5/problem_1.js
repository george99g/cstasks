function solve(args) {
    var arr = new Array(parseInt(args[0]));
    for(var i = 0; i < arr.length; i++)
        arr[i] = i*5;
    var output = "";
    for(var i = 0; i < arr.length; i++)
        output += arr[i] + "\n";
    return output;
}

console.log(solve(['5']));
