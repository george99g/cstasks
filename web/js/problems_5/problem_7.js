function argsToArr(args) {
    var arr = new Array(args.length - 2);
    for(var i = 1; i < args.length - 1; i++)
        arr[i - 1] = parseInt(args[i]);
    return arr;
}

function solve(args) {
    var arr = argsToArr(args);
    var x = parseInt(args[args.length - 1]);
    var leftBoundary = 0;
    var rightBoundary = arr.length - 1;
    while(true)
    {
        if(x > arr[rightBoundary])
            return "fail";
        if(x < arr[leftBoundary])
            return "fail";
        var middle = Math.floor((leftBoundary + rightBoundary)/2);
        if(x === arr[middle])
            return middle;
        if(x > arr[middle])
            leftBoundary = middle + 1;
        else
            rightBoundary = middle - 1;
    }
}

console.log(solve(['10', '1', '2', '4', '8', '16', '31', '32', '64', '77', '99', '32']));
