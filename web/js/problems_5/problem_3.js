function solve(args) {
    var maxSequence = 0;
    var currentSequence = 1;
    for(var i = 2; i < args.length; i++)
    {
        if(parseInt(args[i]) === parseInt(args[i - 1]))
        {
            currentSequence++;
            if(currentSequence > maxSequence)
                maxSequence = currentSequence;
        }
        else
            currentSequence = 1;
    }
    return maxSequence;
}

console.log(solve(['10', '2', '1', '1', '2', '3', '3', '2', '2', '2', '1']));
console.log(solve(['10', '2', '1', '1', '2', '3', '3', '6', '10', '4', '4']));
console.log(solve(['10', '2', '2', '2', '2', '3', '3', '6', '10', '4', '4']));
