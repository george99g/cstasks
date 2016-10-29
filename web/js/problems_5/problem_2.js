function solve(args) {
    if(args[0].length > args[1].length)
        return ">";
    if(args[0].length < args[1].length)
        return "<";
    for(var i = 0; i < args[0].length; i++)
    {
        if(args[0][i] > args[1][i])
            return ">";
        if(args[0][i] < args[1][i])
            return "<";
    }
    return "=";
}

console.log(solve(['hello', 'halo']));
console.log(solve(['food', 'food']));
