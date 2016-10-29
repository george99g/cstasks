function hexCharToDec(arg) {
    switch(arg)
    {
    case '0': return 0;
    case '1': return 1;
    case '2': return 2;
    case '3': return 3;
    case '4': return 4;
    case '5': return 5;
    case '6': return 6;
    case '7': return 7;
    case '8': return 8;
    case '9': return 9;
    case 'A': return 10;
    case 'B': return 11;
    case 'C': return 12;
    case 'D': return 13;
    case 'E': return 14;
    case 'F': return 15;
    }
    return -1;
}

function solve(args) {
    var decimalValue = 0;
    for(var i = args[0].length - 1; i > 0; i--)
    {
        decimalValue += Math.pow(16, args[0].length - 1 - i)*
                hexCharToDec(args[0][i]);
    }
    if(args[0][0] === '-')
        return -decimalValue;
    decimalValue += Math.pow(16, args[0].length - 1)*
            hexCharToDec(args[0][0]);
    return decimalValue;
}

console.log(solve(['FE']));
console.log(solve(['1AE3']));
console.log(solve(['4ED528CBB4']));
