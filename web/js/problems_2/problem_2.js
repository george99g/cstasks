function solve(args) {
    if(args[0]%7==0 && args[0]%5==0)
        return "true "+args[0];
    return "false "+args[0];
}

for(var i = 0; i < 5; i++)
    console.log(solve([i.toString()]));
console.log(solve(['35']));
console.log(solve(['140']));
