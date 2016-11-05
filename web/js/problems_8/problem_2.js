function checkBrackets(input) {
    var num = 0;
    for(var i = 0; i < input.length; i++)
    {
        if(input[i] === '(')
            num++;
        else if(input[i] === ')')
        {
            num--;
            if(num < 0)
                return false;
        }
    }
    if(num == 0)
        return true;
    return false;
}

function solve(args) {
    return checkBrackets(args[0])?"Correct":"Incorrect";
}

console.log(solve(['((a+b)/5-d)']));
console.log(solve([')(a+b))']));
console.log(solve([')(a+b))(']));
