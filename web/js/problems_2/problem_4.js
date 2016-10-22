function solve(args) {
    if(Math.floor(args[0]/100)%10==7)
        return true;
    return "false " + Math.floor(args[0]/100)%10;
}

console.log(solve(['5']));
console.log(solve(['701']));
console.log(solve(['9703']));
console.log(solve(['877']));
console.log(solve(['777877']));
console.log(solve(['9999799']));
