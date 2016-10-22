function solve(args) {
    if(args[0]%2==0)
        return "even "+args[0];
    return "odd "+args[0];
}

for(var i = 0; i < 10; i++)
    console.log(solve([i.toString()]));
