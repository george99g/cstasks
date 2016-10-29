function argsToArr(args) {
    var arr = new Array(args.length - 1);
    for(var i = 1; i < args.length; i++)
        arr[i] = parseInt(args[i]);
    return arr;
}

function solve(args) {
    var arr = argsToArr(args);
    arr = arr.sort();
    var max = 1;
    var num = arr[0];
    var repCount = 1;
    for(var i = 1; i < arr.length; i++)
    {
        if(arr[i] === arr[i - 1])
        {
            repCount++;
            if(repCount > max)
            {
                max = repCount;
                num = arr[i];
            }
        }
        else
            repCount = 1;
    }
    return num + " (" + max + " times)";
}

console.log(solve(['13', '4', '1', '1', '4', '2', '3', '4', '4', '1', '2', '4', '9', '3']));
