function solve(input) {
    var arr = new Array;
    if(input.length < 3)
        return arr;
    var i;
    for (i = 1; i < input.length - 1; i++)
    {
        for (var j = i - 1, k = i + 1; j >= 0 && k < input.length; j--, k++)
        {
            if (input[j] === input[k])
            {
                if (k - j + 1 >= 3)
                    arr.push(input.substring(j, k+1));
            }
            else
                break;
        }
    }
    for (i = 1; i < input.length - 1; i++)
    {
        for (var j = i, k = i + 1; j >= 0 && k < input.length; j--, k++)
        {
            if (input[j] === input[k])
            {
                if (k - j + 1 >= 3)
                    arr.push(input.substring(j, k+1));
            }
            else
                break;
        }
    }
    return arr;
}

console.log(solve("aababaaaba"));
